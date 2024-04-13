const express = require("express");
const cors = require("cors");
const app = express();

const port = 3000;

app.use(express.json());
app.use(cors());

app.get("/calculatesum", function (req, res) {
	const x = parseInt(req.query.a);
	const y = parseInt(req.query.b);
	const sum = x + y;
	res.status(200).send(sum.toString());
});

app.listen(port, function () {
	console.log(`server is listening on ${port}`);
});
