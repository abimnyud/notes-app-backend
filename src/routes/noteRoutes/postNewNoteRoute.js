const { postNewNoteHandler } = require("../../handlers");

module.exports = {
	method: "POST",
	path: "/notes",
	handler: postNewNoteHandler
};