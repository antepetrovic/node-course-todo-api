// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unabel to connect to MongoDB SERVER')
    }
    console.log('Connected to MongoDb server');
    //Delete many

    // db.collection('Todos').deleteMany({text: 'Walk the dog'}).then((result) => {
    //     console.log(result);
    // });

    //Delete one

    // db.collection('Todos').deleteOne({text: 'Buy groceries'}).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete

    db.collection('Users').findOneAndDelete({_id: new ObjectID('5b31feadd4a478b1a2e6d5e9')}).then((result) => {
        console.log(result);
    });

    db.collection('Users').deleteMany({name: 'Jure'}).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });


    //db.close();

});