function Name() {

console.log("P");
console.log("R");
console.log("I");
console.log("T");
console.log("H");
console.log("V");
console.log("I");
}

// Name ()
 
/*

function addTwoNumbers (number1 , number2){

    console.log(number1 + number2);
} 
*/

function addTwoNumbers (number1 , number2){

    // let result = number1 + number2 
    // return result
    return number1 + number2
} 

const result = addTwoNumbers ( 3 , 5 )

// console.log( "Result:", result);


function loginUserMessage (username = " sam "){
    if(!username){
        console.log("please enter a valid username");
        return 
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("prithvi"));

// console.log(loginUserMessage("prithvi"));

/*
agar uper apn sam ko declare kar rahe hai user mai tho vo if ki condition ko nhi excute karega or sam dega butnich agr apn console kar rahe hai tho vo phir niche di gayi value ko hi use kar k excute karega 
*/


function calculatecartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculatecartPrice(200,500,300,6000))

const user = {
    username : "Prithvi",
    prices : 199
}

function handleobject(anyobject){
     console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleobject(user)

handleobject({
    username : "sam",
    price : 299
})

const myNewArray = [ 200, 300, 600, 4000]

function returnSecondValue(myarray){
    return myarray[1]
}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200, 300, 600, 4000]));




