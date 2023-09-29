// Assigned "Chris" to the variable myName.
let myName: string = "Chris";

// Assigned 50 to the const variable "states".
const states: number = 50;

// Assigned the result of 5 + 4 to numbers.
let numbers: number = 5 + 4;

// assigned "Hello World! to sayHello"
let sayHello: string = "Hello World!";

//Function with two arguments, name and age. With an if statemnt to check to see if the age is less than 21. If the age is less than 21 an alert will show.
let checkAge = (name: string, age: number) => {
	if (age < 21) {
		alert(`Sorry ${name}, you arent't old enough to view this page!`);
	}
};

// Calling the function 4 times with 4 different names and ages.
checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);

// Array with my favorite vegetables.
let favVeggies: string[] = ["Broccoli", "Brussel Sprouts", "Kale", "Onion"];

// For loop to display each vegetable to the console.
for (let i = 0; i < favVeggies.length; i++) {
	console.log(favVeggies[i]);
}

interface IPet {
	name: string;
	breed: string;
}

// Object with the name of "Pet" with two properties.
let pet: IPet = {
	name: "Jack",
	breed: "Black Lab",
};
// Logging pet object to console
console.log(pet);

interface IPeople {
	name: string;
	age: number;
}

// Array of people with names and ages
let people: IPeople[] = [
	{ name: "Chris", age: 30 },
	{ name: "Kyle", age: 20 },
	{ name: "Valerie", age: 30 },
	{ name: "James", age: 19 },
	{ name: "jennifer", age: 55 },
];

// Loop to call checkAge function for each object
for (let i = 0; i < people.length; i++) {
	checkAge(people[i].name, people[i].age);
}

let getLength = (word: string): number => {
	return word.length;
};

let newWord = getLength("Hello World");

if (newWord % 2 === 0) {
	console.log("The world is nice and even!");
} else {
	console.log("The world is an odd place!");
}
