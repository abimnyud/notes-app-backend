const { editNoteHandler } = require("../../handlers/noteHandlers");

module.exports = {
	method: "PUT",
	path: "/notes/{id}",
	handler: editNoteHandler,
};