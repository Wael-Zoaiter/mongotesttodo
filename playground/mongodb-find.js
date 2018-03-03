const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server.');

    // Return the number of documents

    db.collection('Brothers').find().count().then( (count) => {
        console.log('Count:' + count);
    }, (err) => {
        console.log('Unable to fetch Todos Data.');
    });

    // Find a specifice document depends on its fields

    db.collection('Brothers').find({
        _id: new ObjectID('5a96d114c2ec66116c54fe0e')
    }).toArray().then( (docs) => {
        console.log(JSON.stringify(docs,undefined,2));
    }, (err) => {
        console.log('Unable to fetch Todos Data.');
    });

    // Find All Documents in the 'Brothers' collection

    db.collection('Brothers').find().toArray().then( (docs) => {
        console.log(JSON.stringify(docs,undefined,2));
    }, (err) => {
        console.log('Unable to fetch Todos Data.');
    });
});

//  Create new uniqe ID

let obj = new ObjectID();
console.log(obj);