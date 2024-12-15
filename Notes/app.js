const yargs = require('yargs');
const notes = require('./notes');

// Add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
});

// Edit command
yargs.command({
    command: 'edit',
    describe: 'Edit an existing note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Updated note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.editNote(argv.title, argv.body);
    }
});

yargs.parse();
