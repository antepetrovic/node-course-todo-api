// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unabel to connect to MongoDB SERVER')
    }
    console.log('Connected to MongoDb server');

    // db.collection('Todos').findOneAndUpdate(
    //     {_id: new ObjectID('5b322d23a9f0fc5fbe475091')},
    //     {
    //         $set: {completed: false}
    //     },
    //     {
    //         returnOriginal: false  
    //     }).then((res) => {
    //         console.log(res);
    // });

    db.collection('Users').findOneAndUpdate(
        {_id: new ObjectID('5b32033897ee6dd798b1964e')},
        {
            $set: {name: 'Ante'},
            $inc: {age: 1}
        },
        {
            returnOriginal: false  
        }).then((res) => {
            console.log(res);
        });

    //db.close();

});