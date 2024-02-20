const myNumbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map ( (num) => { return num + 10 })

// now we are seeing chaining now which meaing using more than 1 or 2 methods at a time 

const newNums = myNumbers
                .map((num) => num * 10 )
                .map ((num) => num + 1)
                .filter ( (num) => num >= 40)

console.log(newNums);




