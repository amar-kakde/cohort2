const express = require("express");
const { createTodo, updateTodo } = require("./types.js");
const port = 3000;
const app = express();

app.use(express.json());

app.get("/todos", function (req, res) {
	//
});

app.post("/todo", function (req, res) {
	const createPayload = req.body;
	const parsedPayload = createTodo.safeParse(createPayload);
	if (!parsedPayload.success) {
		res.status(401).json({
			msg: "you sent the wrong inputs",
		});
		return;
	}
	// put in mongo db
});

app.post("/completed", function (req, res) {
	const updatePayload = req.body;
	const parsedPayload = updateTodo.safeParse(updatePayload);
	if (!parsedPayload.success) {
		res.status(401).json({
			msg: "you sent the wrong input",
		});
		return;
	}
	// update in mongo db
});

app.listen(port, function () {
	console.log(`server is listening on ${port}`);
});
