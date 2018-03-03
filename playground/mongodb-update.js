const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server.');

    db.collection('Brothers').findOneAndUpdate({ // search
        _id: new ObjectID('5a986f0f8e2b5a030eadfe3d')
    },{ // update
        $set: {
            name: 'Wael'
        }
    },{ // options
        returnOriginal: false
    }).then( (result) => {
        console.log(result);
    });

});