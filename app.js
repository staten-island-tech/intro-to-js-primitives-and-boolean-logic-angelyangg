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
let temperature = 68;

if (temperature < 68) {
    console.log("Too Cold");
} else if (temperature >= 68 || temperature <= 72) {
    console.log("Perfect");
} else if (temperature >= 73 && temperature <= 76) {
    console.log("Warm");
} else if (temperature > 76) {
    console.log("Too Hot");
}