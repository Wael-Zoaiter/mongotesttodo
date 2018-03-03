const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server.');

    db.collection('Brothers').insertMany([{
        name: 'Wael',
        age: 22,
        location: 'Damascus'
    },{
        name: 'Yazan',
        age: 21,
        location: 'German'
    },{
        name: 'Ahmad',
        age: 18,
        location: 'Damascus'
    }], (err, result) => {
        if (err) {
            return console.log('Unable to insert data to the database.');
        }
        console.log(result.ops);
    });
});