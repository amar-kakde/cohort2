const express = require("express");
const cors = require("cors");
const { createTodo, updateTodo } = require("./types.js");
const { todo } = require("./db.js");
const port = 3000;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/todos", async function (req, res) {
	//
	const todos = await todo.find({});
	res.json({
		todos: todos,
	});
});

app.post("/todo", async function (req, res) {
	const createPayload = req.body;
	const parsedPayload = createTodo.safeParse(createPayload);
	if (!parsedPayload.success) {
		res.status(411).json({
			msg: "you sent the wrong inputs",
		});
		return;
	}
	// put in mongo db
	await todo.create({
		title: createPayload.title,
		description: createPayload.description,
		completed: false,
	});

	res.json({
		msg: "Todo Created",
	});
});

app.post("/completed", async function (req, res) {
	const updatePayload = req.body;
	const parsedPayload = updateTodo.safeParse(updatePayload);
	if (!parsedPayload.success) {
		res.status(401).json({
			msg: "you sent the wrong input",
		});
		return;
	}
	// update in mongo db
	await todo.update(
		{
			_id: req.body.id,
		},
		{
			complted: true,
		}
	);
	res.json({ msg: "todo marked as completed" });
});

app.listen(port, function () {
	console.log(`server is listening on ${port}`);
});
