const { getNoteListHandler } = require("../../handlers");

module.exports = {
	method: "GET",
	path: "/notes",
	handler: getNoteListHandler,
};