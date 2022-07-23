const { getNoteByIdHandler } = require("../../handlers");

module.exports =   {
	method: "GET",
	path: "/notes/{id}",
	handler: getNoteByIdHandler,
};