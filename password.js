const readline = require('readline');

const password = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

console.log("Welcome to the password validator tool! \n");
password.question(`Please enter password that is at least 10 characters long: \n >`, function(input){
	token = input;

	if(token.length < 10){
		console.log("password is too short");
	}else
		console.log("new password created");

	password.close();
});


