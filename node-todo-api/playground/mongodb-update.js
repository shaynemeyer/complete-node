const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if(error) {
    console.log('Unable to connect MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // update single value of an object
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5895f49d261dc5aa72bb354f')
  // }, {
  //   $set: {
  //     completed: false
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('58968f00e1a1ac811c088330')
  }, {
    $set: {
      name: 'Sam',
      age: 5
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  // db.close();
});