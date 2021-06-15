"use strict";
//declare and initialize//
let name = "Mitch Cuckovich";
let age = 25;
let birthday = "January 24";
let lifeEvents = ["I was born in Troy, Michigan.", "I went to Hope College", 
"I went to Junior Olympics when I was 10 years old. I placed 14th in the nation in the 800 meter event.",
"I'm a graduate of the front-end bootcamp."];
//if/else statement//
let detroitGC 
if (detroitGC === true ) {
    console.log(`My name is ${name} and I am a student at Grand Circus in Detroit, MI. I am currently ${age} years old and my birthday is on ${birthday}.`)
} else {
    console.log(`My name is ${name} and I am a student at Grand Circus in Detroit, MI. I am currently ${age} years old and my birthday is on ${birthday}.`)
}
//For of loop; i = 0; while (i < lifeEvents.length); i++; console.log (lifeEvents[i])//
for (let i = 0; i < lifeEvents.length; i++ ) {
    console.log(lifeEvents[i])
}
//declare and initialize counter = 0//
let counter = 0;
//while loop - declare variable randomNumber; if else statement with two conditions//
let randomNumber = Math.ceil (Math.random() * 10);
while (true) {
if (randomNumber !== 5) {
    counter++;
    console.log(`${randomNumber} !== 5`);
   
} else {
    counter++;
    console.log(`5 === 5. It took ${counter} iterations to randomly generate the number 5.`);
    break;
}
}