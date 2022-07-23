const editNoteHandler = (notes) => {
	const editNote = (request, h) => {
		const { id } = request.params;
		const { title, tags, body } = request.payload;

		const now = new Date().toISOString();

		const idx = notes.findIndex((note) => note.id === id);

		if (idx === -1) {
			const response = h.response({
				status: "fail",
				message: "Gagal memperbarui catatan. Id tidak ditemukan",
			});
			response.code(404);
			return response;
		}

		// Update note
		notes[idx] = {
			...notes[idx],
			title,
			tags,
			body,
			updatedAt: now,
		};

		const response = h.response({
			status: "success",
			message: "Catatan berhasil diperbarui",
		});
		response.code(200);
		return response;
	};

	return editNote;
};

module.exports = editNoteHandler;