//   Primitive

// 7 types : String, Number, Boolean, Null, undefined, symbol, BigInt

const score = 198
const scoreValue = 234.5

const isLoggedIn = false
const oustsideTemp = null
let userEmail;

const id = Symbol ('2000')
const anotherId = Symbol ('2000')

console.log(id === anotherId);

const  bigNumber =  1593248765212564878254114n


// Reference ( non primitive)

// Array, objects, Functions


const heros = ["shaktiman","shinchan","perman"];
 let myObj = {
    name :"prithvi",
    age : 22,
}

const myfunction = function (){
    console.log("hello world");
}

console.log(typeof anotherId);





//////**************************************************************

// stack (primitive), Heap ( non-primitive)

let myCompanyname = "theGolbalheights"

let anotherName = myCompanyname
anotherName = "Highknight"

console.log(myCompanyname);
console.log(anotherName);

let userOne = {
    email : "unknown@gmailcom",
    upi : "unknown@ybl"
}

let userTwo = userOne

userTwo.email = "prithvi@google.com"

console.log(userOne.email);
console.log(userTwo.email);