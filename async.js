//write a function that returns promise

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

fetchData().then((data) => {
	processData(data).then(() => {
		console.log(data);
	});
});
