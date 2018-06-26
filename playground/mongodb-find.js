// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unabel to connect to MongoDB SERVER')
    }
    console.log('Connected to MongoDb server');

    // db.collection('Todos').find(
    //     {_id: new ObjectID('5b320df0a9f0fc5fbe474b33')}
    // ).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch data', err);
    // });

    db.collection('Users').find(
        {name:'Ante'}
    ).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch', err);
    });

    db.collection('Todos').count().then((count) => {
        console.log(`Todos count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch data', err);
    });    

    db.close();

});