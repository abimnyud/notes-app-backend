const { deleteNoteByIdHandler } = require("../../handlers/noteHandlers");

module.exports = {
	method: "DELETE",
	path: "/notes/{id}",
	handler: deleteNoteByIdHandler,
};