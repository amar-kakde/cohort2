const express = require("express");
const port = 3000;
const app = express();

app.use(express.json());

app.get("/", function (req, res) {
	//
});

app.listen(port, function () {
	console.log(`server is listening on ${port}`);
});
