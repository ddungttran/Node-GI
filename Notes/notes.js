const fs = require('fs');

const getNotes = function() {
    return 'Your notes...';
};

const addNote = function(title, body) {
    const notes = loadNotes();
    const duplicateNote = notes.find(note => note.title === title);

    if (!duplicateNote) {
        notes.push({ title, body });
        saveNotes(notes);
        console.log('Note added!');
    } else {
        console.log('Note title taken!');
    }
};

const editNote = function(title, body) {
    const notes = loadNotes();
    const noteIndex = notes.findIndex(note => note.title === title);

    if (noteIndex !== -1) {
        notes[noteIndex].body = body;
        saveNotes(notes);
        console.log('Note updated!');
    } else {
        console.log('Note not found!');
    }
};

const saveNotes = function(notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
};

module.exports = {
    getNotes,
    addNote,
    editNote
};
