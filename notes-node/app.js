console.log('starting app');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes');

var argv = yargs.argv;
var command = argv._[0];

console.log('Command: ', command);

if (command === 'add'){
  let note = notes.addNote(argv.title, argv.body);

  if (note){
    console.log('Note created');
    console.log('--');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
  } else {
    console.log('That title already exists, please use a unique title!');
  }

} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  notes.readNote(argv.title);
} else if (command === 'remove') {
  let noteRemoved = notes.removeNote(argv.title);
  let message = noteRemoved ? 'Note was removed': 'Note not found';
  console.log(message);
} else {
  console.log('Command not recognized');
}