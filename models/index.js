const mongoose = require('mongoose');

// TODO: Implement .env variables
const IP = 'database:27017';
const dbURI = process.env.MONGODB_URI || `mongodb://localhost:27017/bookings`;

mongoose.connect(
  dbURI,
  {
    useNewUrlParser: true
  }
);

module.exports = { Booking: require('./Booking') };
