console.log('Starting notes.js');

const fs = require('fs');

let fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch(e) {
    return [];
  }
};

const saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
  console.log('Saved note');
};

const addNote = (title, body) => {
  let notes = fetchNotes();
  let note = {
    title,
    body
  };

  let duplicateNotes = notes.filter((note) => note.title === title);

  if(duplicateNotes.length === 0){
    notes.push(note);
    saveNotes(notes);
    return note
  }
};

const getAll = () => {
  console.log("Getting all notes");
};

const readNote = (title) => {
  console.log(`Read note with title: ${title}`);
}

const removeNote = (title) => {
  // fetch notes
  let notes = fetchNotes();
  // filter notes, removing the one with the title of argument
  let filteredNotes = notes.filter((note) => note.title !== title);
  // save new notes array
  saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length;
};

module.exports = {
  addNote,
  getAll,
  readNote,
  removeNote
}