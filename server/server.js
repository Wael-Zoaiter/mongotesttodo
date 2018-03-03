var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
var port = process.env.PORT || 8000;

app.use(bodyParser.json());

app.post('/todos', (req,res) => {
    var newTodo = new Todo({
        text: req.body.text
    });
    newTodo.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.send(err);
    });
});

app.get('/todos', (req,res) => {
    Todo.find().then( (todos) => {
        res.send({todos});
    }, (err) => {
        res.status(400).send(err);
    });
});

app.get('/todos/:id', (req,res) => {

    var id = req.params.id;
    // req.params is an Object that has our 'id' as properity

    if(!ObjectID.isValid(id)) { // ID not valid
        return res.status(404).send();
        // send 404 and empty res
    }

    Todo.findById(id).then( (todo) => {
        // ID valid but there is no document found
        if (!todo) {res.status(404).send()}

        // ID valid, Document found
        res.send({todo});
        // We send it as an object {..} to add some properity later

    }).catch( (err) => { // Error happens
        res.status(400).send();
    });

});

app.delete('/todos/:id', (req,res) => {

    var id = req.params.id;

    if(!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Todo.findByIdAndRemove(id).then( (todo) => {
        if(!todo) {
            return res.status(404).send();
        }

        res.send(todo);
    }).catch( (err) => {
        res.status(400).send();
    });

});

app.listen(port, () => {
    console.log(`Listening to PORT:${port}`);
});