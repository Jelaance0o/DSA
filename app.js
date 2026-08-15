console.log(Math.floor(10/3)) //has to a be an integer value
console.log(3/10)
console.log(10%3)
console.log(2%10)  // smaller one is the reminder

// n = 45678 now if want to remove last digit divide by 10 
// if two digit divide by 100
// if three digit divide by 1000


// 45678 want last 1 digit mod % with 10 and continur like divide

console.log(456878%1000)

// Relational Operaters

console.log(10>9)

console.log(10>=9) // true cause 1 condition 

console.log("9" == 9) //true because matching values not type

console.log("9" === 9) //false because matching values and type both

//Logical operater

//AND

console.log(12>7 && 8<56 && 5>43)  //both condition must be true
//in and if first is false it doest checjk others number

// OR
//Doest matter if one value is true answer is true
console.log(12>3 || 43>21 || 43>543)

// Not = reverse


//Unary Operater

// post = dhaba (use then pay) , pre  = dominose (pay then use)

// let x = 10 
// console.log(x , y)
//  y = ++x //post
// console.log(x , y)

let y = 7;
y += 2;
y *= 3;
y -= 4;
y %= 5;
console.log(y);
