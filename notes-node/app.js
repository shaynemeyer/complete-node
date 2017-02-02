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
    notes.logNote(note);
  } else {
    console.log('That title already exists, please use a unique title!');
  }

} else if (command === 'list') {
  let allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach((note) => notes.logNote(note));

} else if (command === 'read') {
  let note = notes.getNote(argv.title);

  if(note){
    console.log('Note found');
    notes.logNote(note);
  } else {
    console.log(`Not able to find a note with the title: ${argv.title}`)
  }

} else if (command === 'remove') {
  let noteRemoved = notes.getNote(argv.title);
  let message = noteRemoved ? 'Note was removed': 'Note not found';
  console.log(message);
} else {
  console.log('Command not recognized');
}