// const tinderUser = new Object()
const tinderUser = {} 

tinderUser.id = "123upd"
tinderUser.name = "Ruby"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "unknown@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Prithvi",
            lastname : "Kamble"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a" , 4: "b"}
const obj4 = {5: "a" , 6: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)


const obj3 = {...obj1, ...obj2} //.... is the spred operator
// console.log(obj3);

const user = [
    {
        id: 1,
        email: "prith@gmail.com"
    },
    {
        id: 1,
        email: "prith@gmail.com"
    },
    {
        id: 1,
        email: "prith@gmail.com"
    },
]

user[1].email
// console.log(tinderUser);

// console.log( Object.keys(tinderUser));
// console.log( Object.values(tinderUser));
// console.log( Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));

const Anime = {
    Animename : "Naruto",
    episodes : "200",
    creator : "Masashi Kishimoto"
}

// console.log(Anime.Animename); this is the baisc way to call the events ins the object but the most popular way and also which will be used regulary is shown below

const {creator: otaku } = Anime

// console.log(creator);
console.log(otaku);


// this the basic object syntax in JSON

/*{
    "name": "Prithvi",
    "coursename": "js in hindi",
    "price": "free"
}
*/

// API's array k format mai bhi milti hai jaise uper json k format mai mili hai 

/*
[
    {},
    {},
    {}
]
*/