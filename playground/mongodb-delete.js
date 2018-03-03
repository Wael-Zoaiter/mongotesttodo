const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {

    // Delete One
    db.collection('Brothers').deleteOne({name: 'Wael'}).then( (result) => {
        console.log(result.result);
    });

    // Delete Many
    db.collection('Brothers').deleteMany({location: 'Damascus'}, (err,result) => {
        if (err) {
            return console.log(err);
        }
        console.log(result.result);
    });
    db.collection('Brothers').deleteMany({name: 'Yazan'});

    // Find One and Delete
    db.collection('Brothers').findOneAndDelete({name: 'Wael'}).then( (result) => {
        console.log(result);
    });
});