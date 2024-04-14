const express = require("express");
const {
	usernameSchema,
	userpasswordSchema,
} = require("user_validation_schema.js");
const app = express();
const port = 3000;

app.use(express.json());

function userMiddleware(req, res, next) {
	const username = req.headers.username;
	const password = req.headers.password;

	if (
		usernameSchema.safeParse(username).success &&
		userpasswordSchema.safeParse(password).success
	) {
		next();
	} else {
		res.Status(400).json({
			msg: "validation failed.",
		});
	}
}

app.get("/", userMiddleware, function (req, res) {
	res.json({
		msg: "sodkao d",
	});
});

app.listen(port, function () {
	console.log(`server listening on port ${port}...`);
});
