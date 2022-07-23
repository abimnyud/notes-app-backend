const noteHandlers = require("./noteHandlers");

const handlerList = [
	noteHandlers
];
  
const handlers = {};
  
handlerList.forEach((handler) => {
	Object.assign(handlers, handler);
});
  
module.exports = handlers;