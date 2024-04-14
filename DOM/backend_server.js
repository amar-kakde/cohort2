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

app.get("/interest", function (req, res) {
	const principal = parseFloat(req.query.principal);
	const interest = parseFloat(req.query.interest);
	const tenure = parseFloat(req.query.tenure);

	let simpleInterest = (principal * interest * tenure) / 100;
	const TotalAmount = principal + simpleInterest;

	res.status(200).json({
		simpleInterest: simpleInterest,
		TotalAmount: TotalAmount,
	});
});

app.listen(port, function () {
	console.log(`server is listening on ${port}`);
});
