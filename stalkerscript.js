//Script for JS Stalker Browser Exercise.

var userFirstName = prompt("What is your first name?");
//This will save the entered variable.

var userLastName = prompt("What is your last name?");
var userAge = prompt("How old are you?");
function ofLegalAge() {
if (userAge >= 21) {
alert("You are under legal age!");
}
}

alert("Your full name is " + userFirstName + " " + userLastName);
alert("You are " + userAge);

