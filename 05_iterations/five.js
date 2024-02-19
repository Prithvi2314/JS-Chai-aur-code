const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (value) { 
//     console.log(value);
// } )

// coding.forEach( (items) => {
//     console.log(items);
// })

// function printMe (item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( ( item , index , arr ) => {
//     console.log(item , index , arr);
// })


const myCoding = [
    {
        languageName : " javascript ",
        languageFileName : "js"
    },
    {
        languageName : " java ",
        languageFileName : "java"
    },
    {
        languageName : " python ",
        languageFileName : "py"
    }
]

myCoding.forEach( (elements) => {
    console.log(elements.languageName);
})