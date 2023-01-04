const express = require('express')
const multer = require('multer')
const path = require('path')
const carsController = require('../controllers/carsController')
const authController = require('../controllers/authController')

const router = express.Router()

var storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, './uploads/')
  },
  filename: (req, file, callBack) => {
    callBack(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname),
    )
  },
})
var upload = multer({
  storage: storage,
})

// alias routes
router
  .route('/top-5-tours')
  .get(carsController.topAlias, carsController.getCars)
router.route('/getStats').get(carsController.getCarStats)

router.route('/').get(carsController.getCars).post(
  // authController.protect,
  // authController.restrictTo('admin'),
  carsController.createCar
)

router
  .route('/:id')
  .get(carsController.getCarById)
  .patch(
    authController.protect,
    authController.restrictTo('admin'),
    carsController.updateCar
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    carsController.deleteCar
  )

  router.route('/uploadCars').post(upload.single('uploadCsv'), carsController.uploadCarsFile)

module.exports = router
