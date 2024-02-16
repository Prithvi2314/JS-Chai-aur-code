const userEmail = []
if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have a user email");
} 

// falsy values

// false , 0 , -0 ,BigInt 0n ,"" , null ,undefined , NaN 

// Truthy values

// "0",'false'," ", [] , {} , function(){} // any thing in the string including the space is the truthy value

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish coalscing operator (??) : null undefined

let val1;

// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);

// Terniary operator 

// condition ? true : false 

const iceTeaprice = 100
iceTeaprice <= 80 ? console.log("less than 80") : console.log("more than 80");


