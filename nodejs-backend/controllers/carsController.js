// const https = require('https')
const Car = require('../models/cars')
const handleFactory = require('./handleFactory')
const Fs = require('fs');
const CsvReadableStream = require('csv-reader');

const carsControllers = {}

carsControllers.topAlias = (req, res, next) => {
  req.query.limit = '5'
  req.query.sort = '-ratingsAverage,price'
  req.query.fields = 'name,ratingsAverage,price,difficulty'

  next()
}

carsControllers.getCars = handleFactory.getDocs(Car)
carsControllers.getCarById = handleFactory.getDoc(Car)
carsControllers.createCar = handleFactory.createDoc(Car)
carsControllers.updateCar = handleFactory.updateDoc(Car)
carsControllers.deleteCar = handleFactory.deleteDoc(Car)

// tourControllers.addTours = async (req, response) => {
//   const url = 'https://www.natours.dev/api/v1/tours'

//   response.setHeader('Content-Type', 'text/html')
//   let flag = 0
//   https
//     .get(url, (res) => {
//       let data = ''
//       res.on('data', (chunk) => {
//         data += chunk
//       })
//       res.on('end', async () => {
//         data = JSON.parse(data)
//         const apiData = data.data.data
//         await apiData.forEach(async (item) => {
//           try {
//             const dbData = {
//               name: item.name,
//               ratingsAverage: item.ratingsAverage,
//               ratingsQuantity: item.ratingsQuantity,
//               durations: item.durations,
//               maxGroupSize: item.maxGroupSize,
//               difficulty: item.difficulty,
//               price: item.price,
//               priceDiscount: item.priceDiscount,
//               summary: item.summary,
//               description: item.description,
//               imageCover: item.imageCover,
//               images: item.images,
//               startDates: item.startDates,
//             }
//             await Tour.create(dbData)
//           } catch (err) {
//             console.log('error is ', err.message)
//             response.write('Error occured', err.message)
//             flag = 1
//           }
//         })
//         if (flag === 0) {
//           response.status(201).json({
//             status: true,
//             message: 'All data added',
//           })
//         } else {
//           response.end()
//         }
//       })
//     })
//     .on('error', (err) => {
//       console.log(err.message)
//       response.status(400).json({
//         status: false,
//         message: 'some issue occured',
//       })
//     })

//   //   res.json({
//   //     data,
//   //   })
// }

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

carsControllers.uploadCarsFile = async (req,res)=>{
  let inputStream = Fs.createReadStream('./uploads/' + req.file.filename, 'utf8');

  inputStream
	  .pipe(new CsvReadableStream({ parseNumbers: true, parseBooleans: true, trim: true }))
	  .on('data', function (row) {
	    console.log('A row arrived: ', row);
	  })
	  .on('end', function () {
	    console.log('No more rows!');
	  });
} 

module.exports = carsControllers
