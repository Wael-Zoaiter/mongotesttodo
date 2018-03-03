var mongoose = require('mongoose');

// Create new Model
var User = mongoose.model('User',{
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        default: 'user@example.com'
    }
});

module.exports = User;