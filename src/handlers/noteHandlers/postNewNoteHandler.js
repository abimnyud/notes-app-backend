const { nanoid } = require("nanoid");

const postNewNoteHandler = (notes) => {
	const postNewNote = (request, h) => {
		const { title, tags, body } = request.payload;
    
		const id = nanoid(16);
		const now = new Date().toISOString();
    
		const newNote = {
			id,
			title,
			tags,
			body,
			createdAt: now,
			updatedAt: now
		};
        
		notes.push(newNote);
    
		const isSuccess = notes.filter((note) => note.id === id).length > 0;
    
		if (!isSuccess) {
			const response = h.response({
				status: "fail",
				message: "Catatan gagal ditambahkan",
			});
			response.code(500);
			return response;
		}
    
		const response = h.response({
			status: "success",
			message: "Catatan berhasil ditambahkan",
			data: {
				noteId: id,
			},
		});
		response.code(201);
		return response;
	};

	return postNewNote;
};

module.exports = postNewNoteHandler;