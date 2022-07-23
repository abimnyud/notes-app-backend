const postNewNoteRoute = require("./postNewNoteRoute");
const getNoteListRoute = require("./getNoteListRoute");
const getNoteByIdRoute = require("./getNoteByIdRoute");
const putNoteByIdRoute = require("./putNoteByIdRoute");
const deleteNoteByIdRoute = require("./deleteNoteByIdRoute");

module.exports = [
	postNewNoteRoute,
	getNoteListRoute,
	getNoteByIdRoute,
	putNoteByIdRoute,
	deleteNoteByIdRoute
];