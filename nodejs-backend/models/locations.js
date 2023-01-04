const mongoose = require('mongoose')

const locationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
)

const Location = mongoose.model('Location', locationSchema)
module.exports = Location
