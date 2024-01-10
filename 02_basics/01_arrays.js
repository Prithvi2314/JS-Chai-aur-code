//  Array

const myArr = [2, 4, 9, 7, 1]
const myHeros = ["Naruto" , "itachi", "shikarmaru", "kakashi"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// interveiw mai puchte hai (js arrar-copy operations create shallow copies)
// a shallow copy of an object is a copy whose properties share the same reference (point to the same underlying values) as those of the source object from which the copy was made
// Deep copy doest not share the same references point

// Array Methods

// myArr.push(5)
// myArr.push(6)
// myArr.pop()

// myArr.unshift(0)
// myArr.shift()

// console.log ( myArr.includes(7));
// console.log ( myArr.indexOf(9));

const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr);


// Slice , splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3)
console.log("c", myArr);
console.log(myn2);

/*       intervew question :
slice or splice ka ye difference hai ki (ek mai range include nhi hoti or ek mai hoti hai
slice - mai last ki jo range hai for ex:(1,3) tho 3 wala nhi hoga 3 rd position pe jo hai
splice - mai jo range hai vo include hoti hai (1,3) yaha pe sare 1 se leke 3 tak sare range k output print ho jate hai 
imp point - ye sab use karne pr jo bhi slice or splice kiye hue elements hote hai ye ht jate hai
ext imp point - the original array is manipulated*/ 













