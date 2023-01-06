const mongoose = require('mongoose')
const slugify = require('slugify')

const carsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    slug: String,
    mileage: {
      type: String,
      required: true,
    },
    gearType: {
      type: String,
      required: true,
    },
    gas: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    thumbnailSrc: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true,
    },
    monthlyPrice: {
        type: Number,
        required: true,
    },
    availability: {
        type: Boolean,
        required: true,
        default: true
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
)

carsSchema.index({ price: 1 })

carsSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true })
  next()
})

const Car = mongoose.model('Car', carsSchema)
module.exports = Car
