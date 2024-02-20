// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item
// })

// // foreach hai koi bhi value  return nhi karne wala

// console.log(values);


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num ) => {
//      return num > 4
// } )
// console.log(newNums);

/* IMP HAI UPER KA MYNUMS KA CODE ISMAI NA AGAR PARENTHESE {} LAGA RAHE HO SAME LINE MAI THO CODE RUN HOTA HAI 
 BUT AGAR US PARENTHESE KO AGAR SCOPE MAI CHANGE KAR RAHE HO AISE ===>
  const newNums = myNums.filter( (num ) => {
    num > 4
} ) 
THO HUME "RETURN" KEYWORD YE LAGA IMPORATANT HAI ANIVARYA HAI FILTER K ANDAR JAISE KI UPAR BATAYA GAYA HAI
*/

const newNums = []

myNums.forEach ( (num) => { 
    if (num > 4) {
        newNums.push(num)
    }
})
// console.log(newNums);

const books = [
    {title : 'Book one', genre : 'fiction' , publish: 1981,
    edition: 2004},
    {title : 'Book two', genre : 'non - fiction' , publish: 1992,
    edition: 2008},
    {title : 'Book three', genre : 'history' , publish: 1999,
    edition: 2007 },
    {title : 'Book four', genre : ' non - fiction' , publish: 1989,
    edition: 2010},
    {title : 'Book five', genre : 'science' , publish: 2009,
    edition: 2014},
    {title : 'Book six', genre : 'fiction' , publish: 1987,
    edition: 2010},
    {title : 'Book seven', genre : 'history' , publish: 1986,
    edition: 1996},
    {title : 'Book eight', genre : 'science' , publish: 2011,
    edition: 2004},
    {title : 'Book nine', genre : 'non - fiction' , publish: 2011,
    edition: 2004}
];

 let userbooks = books.filter ( (bk) => bk.genre === 'history')

 userbooks = books.filter ( (bk) => { 
     return bk.publish >= 1995 && bk.genre === 'history'
    })
console.log(userbooks);


