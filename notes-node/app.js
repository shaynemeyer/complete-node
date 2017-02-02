console.log('starting app');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes');

const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
}

const bodyOptions = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
}

var argv = yargs
  .command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('list', 'Lists all notes')
  .command('read', 'Read a note',{
    title: titleOptions
  })
  .command('remove', 'Remove a note', {
    title: titleOptions
  })
  .help()
  .argv;

var command = argv._[0];




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