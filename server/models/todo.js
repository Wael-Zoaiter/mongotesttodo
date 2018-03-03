var mongoose = require('mongoose');

// Create new Model
var Todo = mongoose.model('Todo',{
    text: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
    },
    complete: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number
    }
});

module.exports = {Todo};