const user = {
    username : "Prithvi",
    price : 999,

    welcomeMessage : function () {
        // console.log(`${this.username} , welcome to the Rolls Roynce`);
        // console.log(this);   
    }
}

// user.welcomeMessage ()
// user.username = "SPRUHA"
// user.welcomeMessage ()

// console.log(this);

// function chai () {
//     let username = "Prithvi"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = " PRITHVI "
//     console.log(this.username);
    
// }

// const chai =  () => {
//     let username = " PRITHVI "
//     console.log(this);
    
// }

// chai ()

// const addTwo =(num1, num2) => {
//     return  num1 + num2 
// }

// const addTwo =(num1, num2) =>  num1 + num2

// const addTwo =(num1, num2) =>  (num1 + num2)
const addTwo =(num1, num2) =>  ({username :"Prithvi"})


console.log(addTwo(3 , 4))


// const myArray = [2, 3, 4, 7, 5]

// myArray.forEach()
