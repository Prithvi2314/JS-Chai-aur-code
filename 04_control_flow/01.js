// if
// const isUserloggedIn = true
// const temperature = 41

// if ( temperature === 40 ) {
//     console.log("less than 50"); 
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
 
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100){
//     let power = "Fly"
//     console.log(`user power : ${power}`);
// }

// console.log(`user power : ${power}`);

const balance = 900

// if (balance > 500 ) console.log("test"),console.log("test2"); this kind of practice should be avoided 

// if ( balance < 500){
//     console.log("less than 500 ");

// } else if (balance < 750) {
//     console.log("less than 750 ");

// } else if (balance < 900){
//     console.log("less than 900 ");

// } else {
//     console.log("less than 2000 ");
// }

const UserloggedIn = true 
const debitCard = true 
const logggedInFromGoggle = false 
const logggedInFromEmail = true 

if (UserloggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
} else if (UserloggedIn &! debitCard) {
    console.log("NOT ALLOWED");
}

if (logggedInFromGoggle || logggedInFromEmail) {
    console.log(" User is logged in ");
}

