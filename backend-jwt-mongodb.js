const express = require("express");
const jwt = require("jsonwebtoken");
const jwt_password = "123456";

const port = 3000;
const app = express();

app.use(express.json());

const ALLUSERES = [
	{
		username: "amarkakde",
		email: "amarkakde21@gmail.com",
		password: "123456",
	},
	{
		username: "anjalikakde",
		email: "anjalikakde21@gmail.com",
		password: "123456",
	},
	{
		username: "ankitakakde",
		email: "ankitakake21@gmail.com",
		password: "123456",
	},
];

function userExists(username) {
	return ALLUSERES.filter(function (user) {
		if (user.username == username) {
			return true;
		}
	});
}

app.get("/users", function (req, res) {
	const token = req.headers.authorization;
	const username = jwt.verify(token, jwt_password);

	const user = ALLUSERES.filter(function (value) {
		if (value.username == username) {
			return false;
		} else {
			return true;
		}
	});

	res.status(200).json({
		users: user,
	});
});

app.post("/signin", function (req, res) {
	const username = req.body.user;
	const password = req.body.password;

	if (userExists(username)) {
		const token = jwt.sign(username, jwt_password);
		res.status(200).json({ Authorization: token });
		return;
	} else {
		res.status(403).json({
			msg: "user does not exists",
		});
		return;
	}
});

app.listen(port, () => {
	console.log(`server is listening on port ${port}`);
});
