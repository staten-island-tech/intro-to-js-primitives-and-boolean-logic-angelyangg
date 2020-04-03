// console.log("connected"); Use this to test under Console in browser, should say "connected"

// let string = "I am a string";
// let sentence = "Hello Angel " + "and Vicky";
// let combine = string + sentence;

// let student = "Sandra";
// let student2 = "Gia";
// let courseName = "AP CSP";
// let teacherName = "Whalen";
// let sentence = student + " and " +
//     student2 + " are taking " +
//     courseName +" with " + teacherName;

// let betterSentence = `${student} and ${student2} are taking ${courseName} with ${teacherName} next year`;




//////////// NUMBERS & INTEGERS ////////////
// let year = 2020;
// let nextYear = year + 1;
// let pastYear = year / 2;
// let future = year * 2;




//////////// Booleans ////////////
// let trueStatement = false;




//////////// Null & Undefined ////////////
// let richard;
// console.log(richard);
// console.log(jiayu);
// Difference between undefined Richard and undeclared (ReferenceError) Jiayu




//////////// Boolean Logic or If/Else ////////////
// let age = 18;
// let baoSquared = "Bao Bao";
// console.log(baoSquared === "Bao Bao");
// console.log(age == "17");

// let age = 18;
// if (age < 18) {
//     console.log("You are a child");
// } else if (age == 18) {
//     console.log("Happy Birthday");
// } else {
//     console.log("You are over 18");
// }




//Red, Green, Yellow
// let light = "green";
// if (light === "green") {
//     console.log("Go");
// } else if (light === "yellow") {
//     console.log("Caution!");
// } else {
//     console.log("Stop");
// }




//Coffee Time
// let kristyIntolerant  = true;
// let baoBaoIntolerant = false;

// if (kristyIntolerant === true && baoBaoIntolerant === true) {
//     console.log("Only Almond Milk");
// } else if (kristyIntolerant === true || baoBaoIntolerant === true) {
//     console.log("Get Both Milks");
// } else{
//     console.log("Only Regular Milk");
// }
// Always use triple equal signs, && = and, || = or




//Cupcake Challenge
// let temperature = 68;

// if (temperature < 68) {
//     console.log("Too Cold");
// } else if (temperature >= 68 || temperature <= 72) {
//     console.log("Perfect");
// } else if (temperature >= 73 && temperature <= 76) {
//     console.log("Warm");
// } else if (temperature > 76) {
//     console.log("Too Hot");
// }




// function test() {
//     console.log("I'm a function");
// }
// test();

// const add = function(x,y) {
//     return x + y; //return ends the function immediately
// };
// console.log(add(100,20));
// const name = "Richard"; //cannot re-define const, don't use let

// const hello = function() {
//     console.log("Hello");
// };
// const bye = function() {
//     console.log("Bye");
// };
// const hiBye = function() {
//     hello();
//     bye();
//     hello();
//     bye();
// };
// hiBye();

// const name = "Thurushi"; //global variable or global space
// function displayName() {
//     const name = "Kelly"; //local or function scope, used over global space
    
//     function sun() {
//         console.log(name); //inner function has access to outer function
//     }

//     return sun;
// }
// const myFunc = displayName();
// myFunc();
//example of closure

//outer function can't access inside function
//inside function can access outer function




//////////// Arrays ////////////
// const names = ["Aarthi", "Vicky", "Vincent", "Doyle", "Kelly"]; //begins with 0
// names.forEach(name => console.log(name));




//////////// Spread Operator ////////////
// const numbers = [1, 2, 3, 4, 5, 6];
// const add = function (x,y,z,a,b,c) {
//     return x + y + z + a + b + c;
// };
// console.log(add(...numbers));




//Filter out all students whose names constain <5 characters
// let students = ["Riya", "Omar", "Alan", "Jiayu", "Michael", "Lisa", "Richard"];
// const newArr = students.filter(word => word.length > 5);
// console.log(newArr);

//Check if includes Junshen
// let students = ["Riya", "Omar", "Alan", "Jiayu", "Michael", "Lisa", "Richard"];
// console.log(students.includes("Junshen"));

//Check if Alan or Savva included in "some"
// let students = ["Riya", "Omar", "Alan", "Jiayu", "Michael", "Lisa", "Richard"];
// console.log(students.includes("Alan" || "Savva"));
// OR USE
// console.log(students.some(name => name == "Savva" || name == "Alan"));