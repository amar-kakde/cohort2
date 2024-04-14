const mongoose = require("mongoose");
const express = require("express");

mongoose.connect(
	"mongodb+srv://admin:XOf7Uqxb7nlCdtHR@cluster0.46m8nad.mongodb.net/user_app"
);

const sampleschema = new mongoose.Schema({
	sample: String,
});

const Sample = mongoose.model("Sample", sampleschema);

const User = mongoose.model("Users", {
	name: String,
	email: String,
	password: String,
});

const user = new User({
	name: "amar kakde",
	email: "amarkakde21@gmail.com",
	password: "a4513",
});

user.save();
