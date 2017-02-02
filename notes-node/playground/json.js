// var obj = {
//   name: 'Shayne'
// };
//
// var stringObj = JSON.stringify(obj);
//
// console.log(stringObj);

// var personString = `{"name": "Shayne", "age": 44}`;
//
// var person = JSON.parse(personString);
//
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var originalNote = {
  title: 'Some title',
  body: 'Some body'
};

// originalNoteString
var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');

// note
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);