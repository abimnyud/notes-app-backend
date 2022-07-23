const notes = require("../../data/notes");

const postNewNoteHandler = require("./postNewNoteHandler");
const getNoteListHandler = require("./getNoteListHandler");
const getNoteByIdHandler = require("./getNoteByIdHandler");
const editNoteHandler = require("./editNoteHandler");
const deleteNoteByIdHandler = require("./deleteNoteByIdHandler");

const noteHandlers = {
	postNewNoteHandler: postNewNoteHandler(notes),
	getNoteListHandler: getNoteListHandler(notes),
	getNoteByIdHandler: getNoteByIdHandler(notes),
	editNoteHandler: editNoteHandler(notes),
	deleteNoteByIdHandler: deleteNoteByIdHandler(notes),
};

module.exports = noteHandlers;