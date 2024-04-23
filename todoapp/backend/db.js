const mongoose = require("mongoose");

mongoose.connect(
	"mongodb+srv://admin:XOf7Uqxb7nlCdtHR@cluster0.46m8nad.mongodb.net/todo"
);
const todoSchema = mongoose.Schema({
	title: String,
	description: String,
	completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
	todo,
};
