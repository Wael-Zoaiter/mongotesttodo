var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Make a Connection to MongoDB server
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};