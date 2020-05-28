console.clear();

// Destructuring - used to unpack values from an array or properties from an obj and into distinct variables that you create
const arr = ["The Crow", "The Cranberries", "Cheesecake"]; // Abide by this order
const [movie, music, food] = arr; // Assigns and initializes values
console.log(movie, music, food);
console.log(`My favourite movie is the ${movie}`);

// Object destructuring can't change property names
const mariana = {
    name: "Mariana Lima",
    age: 31,
    dob: (new Date(1988, 07, 26).toString())
};
console.log(mariana);
const {name, age, dob} = mariana;
console.log(`Your name is ${name} and you are ${age} years old. You were born on ${dob}.`);

// Default values
const tim = {
    alias: "Super Bob"
};
const {alias, aka = "Time", race = "unknown"} = tim;
console.log(alias, aka, race);

// Aliasing destructuring property names
const {name: my_name, age: my_age, dob: my_dob} = mariana;
console.log(my_name, my_age, my_dob);

// Spread operator
const temps = [98, 67, 35];
const tempChanges = [...temps, 89, 65];
console.log(tempChanges);

const person = {name: "Bob", spouse: " Karen", children: 4};
const hobbies = {fav: "Walking the dog", secFav: "Food"};
const completePerson = {...person, hobbirs: {...hobbies}};
console.log(completePerson);

function sayHello (name, age, dob) {
    console.log(`Hello, ${name}. You are ${age} years old. And ${dob}`);
}
const personArr = ["Mariana", 31, "08-26-1988"];
sayHello(...personArr);

function sayGoobye ({name,age, dob}) {
    console.log(this); // Reference (this) within a regular function it's the object itself 
    console.log(`Goobye, ${name}. ${age} ${dob}`);
}
sayGoobye(mariana);

// Arrow functions
const myFirstArrowFunc = () => {
    console.log(this); // Reference (this) is outside this arrow function and in the whole application
    console.log("I'm an arrow function");
}; // Good practice to end with a semi-colon
myFirstArrowFunc(); // Calling function

const func2 = (param1, param2) => {
    console.log(param1, param2);
};
func2("arg1", "arg2");

// Passing one parameter only no () needed
const func3 = param => {
    console.log(param);
};
func3("urgh");

// Single line function when returning one statement
// Only works with a singular statement if there are more it needs to be in a block
const func4 = param => console.log(param);
func4("wowza");





