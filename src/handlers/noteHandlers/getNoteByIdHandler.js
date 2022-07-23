const getNoteListHandler = (notes) => {
	const getNoteList = (request, h) => {
		const { id } = request.params;

		const note = notes.filter((note) => note.id === id)[0];

		if (!note) {
			const response = h.response({
				status: "fail",
				message: "Catatan tidak ditemukan",
			});
			response.code(404);
			return response;
		}

		return {
			status: "success",
			data: {
				note,
			},
		};      
	};

	return getNoteList;
};

module.exports = getNoteListHandler;