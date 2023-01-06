// const https = require('https')
const Car = require('../models/cars')
const handleFactory = require('./handleFactory')
const Fs = require('fs');
const CsvReadableStream = require('csv-reader');
const { uploadToCloudinary } = require('../utils/cloudinaryFunctions')
const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
  cloud_name: 'dm2wzdfn5', 
  api_key: '475944553874185', 
  api_secret: 'LAPMeEpw1tr7EX1KTGxLqM_716I' 
});

const carsControllers = {}

carsControllers.topAlias = (req, res, next) => {
  req.query.limit = '5'
  req.query.sort = '-ratingsAverage,price'
  req.query.fields = 'name,ratingsAverage,price,difficulty'

  next()
}

carsControllers.uploadCarsFile = async (req,res, next) => {
  try {
    let inputStream = Fs.createReadStream('./uploads/' + req.file.filename, 'utf8');
    const carsArr = []

    inputStream
	    .pipe(new CsvReadableStream({ parseNumbers: true, parseBooleans: true, trim: true, asObject: true }))
	    .on('data', function (row) {
        carsArr.push(row)
	    })
	    .on('end', async function () {
        const carsInserted = []
        await Promise.all(carsArr.map(async (car, i) => {
          const cloudinaryLink = await uploadToCloudinary(car.thumbnailSrc)
          const newCar = { ...car, thumbnailSrc: cloudinaryLink.url }
          const createCar = await Car.create(newCar)
          carsInserted.push(createCar)
        }))
        res.json({
          ok: true,
          cars: carsInserted
        })
	    });
  } catch(err) {
    next(new AppError('Some error occured', 500, err))
  }
} 

carsControllers.testUpload = 

carsControllers.getCars = handleFactory.getDocs(Car)
carsControllers.getCarById = handleFactory.getDoc(Car)
carsControllers.createCar = handleFactory.createDoc(Car)
carsControllers.updateCar = handleFactory.updateDoc(Car)
carsControllers.deleteCar = handleFactory.deleteDoc(Car)

carsControllers.getCarStats = async (req, res) => {
  try {
    const stats = await Car.aggregate([
      {
        $match: { ratingsAverage: { $gte: 4 } },
      },
      {
        $group: {
          _id: null,
          avgRating: { $avg: '$ratingsAverage' },
          avgPrice: { $avg: '$price' },
          minPrice: { $min: '$price' },
          maxPrice: { $max: '$price' },
        },
      },
    ])
    res.status(200).json({
      status: true,
      data: stats,
    })
  } catch (err) {
    res.status(404).json({
      status: false,
      message: 'Record not found',
    })
  }
}

module.exports = carsControllers
