const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello world!');
});

// GET /users
app.get('/users', (req, res) => {
  // Give users a name prop and age prop
  const users = [
    {
      name: 'Shayne',
      age: 29
    },
    {
      name: 'Andrew',
      age: 25
    },
    {
      name: 'Jen',
      age: 23
    }
  ];
  res.send(users);
});

app.listen(3000);

module.exports.app = app;