const zod = require("zod");

const usernameSchema = zod.string().email();
const userpasswordSchema = zod.string().min(6);

module.exports = {
	usernameSchema,
	userpasswordSchema,
};
