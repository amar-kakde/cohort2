const express = require("express");
const port = 3000;

const app = express();

let Todo = [];

/*
    {
        id:X,
        title:X
        description:X
        completed:
    }

*/
app.use(express.json());

app.get("/todos", function (req, res) {
	res.json({ todos: Todo });
});

app.post("/add", function (req, res) {
	const id = Todo.length + 1;
	const t = req.body.title;
	const d = req.body.description;

	Todo.push({ Id: id, title: t, description: d, completed: false });

	res.json({
		msg: "saved successfully.",
	});
});

app.listen(port, function () {
	console.log(`Server listening on ${port}`);
});
