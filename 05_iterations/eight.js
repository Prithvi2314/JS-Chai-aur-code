const myNums = [ 1, 2, 3]

// const myTotal = myNums.reduce ( function ( acc , currval ) {
//     console.log(` acc : ${acc} and currval :${currval}`);
//     return acc + currval  
// }, 0)

const myTotal = myNums.reduce( (acc, cuurval) =>  acc + cuurval , 0)

console.log(myTotal);


const shoppingcart = [
    {
        itemName : " js course",
        price : 2999
    },
    {
        itemName : " py course",
        price : 999
    },
    {
        itemName : " mobile dev  course",
        price : 5999
    },
    {
        itemName : " data science course",
        price : 12999
    },
]

const pricetopay = shoppingcart.reduce ( (acc , item) => acc + item.price , 0)

console.log(pricetopay);