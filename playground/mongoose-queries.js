const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '6a9904ec29f6cd7809893751';
var {ObjectID} = require('mongodb');
if (!ObjectID.isValid(id)) {
    console.log('ID not valid');
}

// Find All => return an Array of objects
Todo.find({
    _id: id
}).then( (todos) => {
    console.log('Todos:',todos);
});

// Find One => return first found Object
Todo.findOne({
    _id: id
}).then( (todo) => {
    console.log('Todo:',todo);
});

// Find by ID => return Object
Todo.findById(id).then( (todo) => {
    if(!todo) { // if it's not exsit 
        return console.log('Not found');
    }
    console.log('Todo by ID:',todo);
});