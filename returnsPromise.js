//promise async await
/*
Write a function that returns a promise.
The promise should resolve after a delay of 2 seconds
with the message "Promise resolved successfully"
*/
function returnsPromise() {
	return new Promise(function (resolve) {
		setTimeout(function () {
			resolve("Promise resolved successfully");
		}, 2000);
	});
}
returnsPromise().then(function (data) {
	console.log(data);
});
