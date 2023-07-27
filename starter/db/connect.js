const mongoose = require('mongoose')

const connectDB = (url) => {
  return mongoose.connect(url, { //these are to remove the depreciation warnings
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
}

module.exports = connectDB
