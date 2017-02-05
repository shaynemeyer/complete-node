const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if(error) {
    console.log('Unable to connect MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Something to do'}).then((result) => {
  //   console.log(result);
  // });
  // deleteOne
  // db.collection('Todos').deleteOne({text: 'delete me'}).then((result) => {
  //   console.log(result);
  // });
  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').deleteMany({name: 'Shayne'}).then((result) => {
  //   console.log(result);
  // });
  //
  // db.collection('Todos').findOneAndDelete({
  //   _id: new ObjectID('someobjectid')
  // }).then((result) => {
  //   console.log(result);
  // });
  // db.close();
});