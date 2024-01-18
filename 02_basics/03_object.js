//  singleton (litreals se banega tho vo single nhi hota agar construte se bange tho vo singleton hot hai )
// Object.create

// objects litrals 

const mySym = Symbol ("Key1")

const JsUser =  {
    name : "Prithvi",
    "full name": " Prithvi Kamble",
    [mySym] : "myKey1",
    age : 18 ,
    location : "Hyderabad",
    email : "Prithvi@google.com",
    isLoggedIn : false ,
    lastLoginDays : ["Monday", "saturday"]

    }

//console.log(JsUser.email)
//console.log(JsUser["full name"])
//console.log(JsUser["email"]);
//console.log(JsUser[mySym]);

JsUser.email = "prithvi@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "prithvi@microsoft.com"
//console.log(JsUser);

JsUser.greeting = function () {
    console.log("hello JS user");
}
JsUser.greetingTwo = function () {
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());