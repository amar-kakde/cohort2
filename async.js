//write a function that returns promise

const e = require("express");

function returnsPromise() {
	return new Promise(function (resolve) {
		setTimeout(function () {
			resolve("Promise resolved successfully");
		}, 2000);
	});
}

function sample() {
	returnsPromise().then(function (data) {
		console.log(data);
	});
}

// nested promise
function fetchData() {
	console.log("fetchData");
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve([
				{
					name: "John Muller",
					age: 45,
					Salary: 45000,
				},
				{
					name: "Jenny Muller",
					age: 20,
					Salary: 25000,
				},
			]);
		}, 5000);
	});
}

function processData(data) {
	console.log("prcessData");
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(data);
		}, 2000);
	});
}

/* fetchData().then((data) => {
	processData(data).then(() => {
		console.log(data);
	});
});

*/

// Promise Error handling
function errorPromise() {
	return new Promise((resolve, reject) => {
		if (false) {
			setTimeout(() => {
				resolve("resolved");
			}, 3000);
		} else {
			reject("Error occured.");
		}
	});
}

// errorPromise()
// 	.then((data) => {
// 		console.log(data);
// 	})
// 	.catch(function (e) {
// 		console.log(e);
// 	});

// Write a function that takes an array of URLs and fetches data from each URL using fetch.
// Use Promise.all to wait for all requests to complete and then log the responses

function promise1() {
	fetch("https://dummyjson.com/carts").then((data) => {
		console.log(data);
	});
}
function promise2() {
	fetch("https://dummyjson.com/products").then((data) => {
		console.log(data);
	});
}

function promise3() {
	fetch("https://dummyjson.com/quotes").then((data) => {
		console.log(data);
	});
}

function promise_resolved() {
	Promise.all([promise1(), promise2(), promise3()]).then((values) => {
		console.log(values);
	});
}

//Promise.race

function promise_race_child1() {
	return fetch("https://dummyjson.com/quotes")
		.then((response) => response.json())
		.then((data) => {
			console.log(data.response);
			return data;
		});
}

function promise_race_child2() {
	return setTimeout(() => {
		console.log("setTimeout Function.");
	}, 5000);
}

// Promise.race([promise_race_child1, promise_race_child2]).then((value) => {
// 	console.log(value);
// });

//async await

function read_data() {
	setTimeout(async () => {
		const response = await fetch("https://dummyjson.com/quotes");
		const data = await response.json();
		console.log(data);
	}, 3000);
}

//read_data();c
