let a = 10;
let b = 20;

console.log(a + b); //arthematic operation

let s1 = "hello";
let s2 = 10;
console.log(typeof (s1 + s2)); //concatenation

console.log("The sum of " + a + "and " + b + " is " + a + b);
console.log("The sum of " + a + "and " + b + " is " + (a + b));
console.log(a + b + " The sum of " + a + " and " + b + " is ");

//Js start reading code from left
//in check the operater and both side value and if its interger then the whole is integer , and in first if any one is integer then it is integer

console.log("1" + 1); // because + have two works concatanation and arthematic
console.log("1" - 1); //but - only have one work

//type coercion - change the type in runtime because sign dont have any other mean

// let prompt = require('prompt-sync')() //aslways give no. in string

// let age = Number(prompt("Enter your age "))  //convert string to numb

// console.log(typeof age);
// console.log(`Age ${age}`);

//Swap values

let c = 10;
let d = 20;
console.log(c);
console.log(d);

let temp = c;
c = d;
d = temp;

console.log(c);
console.log(d);


let x = 10
let y = 20
console.log(x,y);


x = x+y
y = x - y
x = x - y
console.log(x,y);

[x,y] = [y,x]
console.log(x,y);