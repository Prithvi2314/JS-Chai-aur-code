// for of 

// ["", "", ""]
// [{}, {}, {}]

const arr = [ 1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings =  "Hello world"
for (const greet of greetings) {
   // console.log(`each char is ${greet}`);
}

// Maps

// The Map object holds key value pairs and remebers the original insertion order of the keys . any value (both the objects and primitive values) may be used as either a key or a value


const map = new Map ()
map.set('IN' , "India")
map.set('FR' , "France")
map.set('GRE' , "germany")
//map.set('IN', "india")

// console.log(map)
// short cut hai square bracket ka [] jo niche use kiya gya hai
for (const [key , value] of map) {
    // console.log(key , ':-', value);
}


const myobject = {
    game1 : 'NFS',
    game2 : 'spiderman'
}

// for (const [key,value] of myobject) {
//     console.log(key , ':-', value);
// }

// for of loop