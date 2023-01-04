const express = require('express')
const locationsControllers = require('../controllers/locationController')
const authController = require('../controllers/authController')

const router = express.Router()

router.route('/').get(locationsControllers.getLocations).post(
  // authController.protect,
  // authController.restrictTo('admin'),
  locationsControllers.createLocation
)

module.exports = router
