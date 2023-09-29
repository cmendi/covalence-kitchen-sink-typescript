// Assigned "Chris" to the variable myName.
var myName = "Chris";
// Assigned 50 to the const variable "states".
var states = 50;
// Assigned the result of 5 + 4 to numbers.
var numbers = 5 + 4;
// assigned "Hello World! to sayHello"
var sayHello = "Hello World!";
//Function with two arguments, name and age. With an if statemnt to check to see if the age is less than 21. If the age is less than 21 an alert will show.
var checkAge = function (name, age) {
    if (age < 21) {
        alert("Sorry ".concat(name, ", you arent't old enough to view this page!"));
    }
};
// Calling the function 4 times with 4 different names and ages.
checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);
// Array with my favorite vegetables.
var favVeggies = ["Broccoli", "Brussel Sprouts", "Kale", "Onion"];
// For loop to display each vegetable to the console.
for (var i = 0; i < favVeggies.length; i++) {
    console.log(favVeggies[i]);
}
// Object with the name of "Pet" with two properties.
var pet = {
    name: "Jack",
    breed: "Black Lab",
};
// Logging pet object to console
console.log(pet);
// Array of people with names and ages
var people = [
    { name: "Chris", age: 30 },
    { name: "Kyle", age: 20 },
    { name: "Valerie", age: 30 },
    { name: "James", age: 19 },
    { name: "jennifer", age: 55 },
];
// Loop to call checkAge function for each object
for (var i = 0; i < people.length; i++) {
    checkAge(people[i].name, people[i].age);
}
var getLength = function (word) {
    return word.length;
};
var newWord = getLength("Hello World");
if (newWord % 2 === 0) {
    console.log("The world is nice and even!");
}
else {
    console.log("The world is an odd place!");
}
