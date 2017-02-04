const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if(error) {
    console.log('Unable to connect MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Unable to insert todo');
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.collection('Users').insertOne({
    name: 'Shayne',
    age: 44,
    location: 'Lake Stevens'
  }, (err, result) => {
    if(err) {
      return console.log('Unable to insert user');
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  db.close();
});