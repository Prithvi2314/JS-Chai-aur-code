const name = " Prithvi "
const repoCount = 10 

// console.log( name + repoCount +  " value ");

// In modern language we dont use this type of upper syntax shown to run the code 

/* Instead we use back tick `` which is basically "STRING INTERPOLATION" 
which means we are creating spaces holders if it has any value it can be directly injected in it */

//console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`);

// Different way to declare a string

const gameName = new String ('Prithvi-wwb-com')

// console.log(gameName);
// console.log(gameName[4]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
//console.log(gameName.charAt(3));
//console.log(gameName.indexOf('v'));

const newString = gameName.substring(0,5)
//console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "    Prithvi    "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://prithvi.com/prithvi%20kamble/best/entrepreneur"

console.log(url.replace('%20' , '-'))

console.log(url.includes('Asha'))
console.log(gameName.split('-'));