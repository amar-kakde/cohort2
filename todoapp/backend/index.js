const express = require("express");
const port = 3000;
const app = express();

app.use(express.json());

app.get("/todos", function (req, res) {
	//
});

app.post("/todo", function (req, res) {
	//
});

app.post("/completed", function (req, res) {
	//
});

app.listen(port, function () {
	console.log(`server is listening on ${port}`);
});
