const getNoteListHandler = (notes) => {
	const getNoteList = () => ({
		status: "success",
		data: {
			notes,
		},
	});

	return getNoteList;
};

module.exports = getNoteListHandler;