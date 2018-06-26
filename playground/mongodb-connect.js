// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unabel to connect to MongoDB SERVER')
    }
    console.log('Connected to MongoDb server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert todo', err)
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection('Users').insertOne({
        name: 'Ante Petrović',
        age: 28,
        location: 'Vrgorac'
    }, (err, result) => {
        if(err) {
            return console.log('Unable to insert user', err)
        }

        console.log(result.ops[0]._id.getTimestamp());
    });

    //db.close();

});