// var c = 300
let a = 300
if (true) {
    let a = 3
    const b = 5 
    // console.log("INNER:", a);
}


// console.log(a);
// console.log(b);
// console.log(c);



function one () {
    const username = "Prithvi"

    function two () {
        const website  =  "vs code"
        console.log(username);
    }
    // console.log(website);

    two()

}

// one ()


if (true) {
    const username = "Prithvi"
    if (username === "Prithvi") {
        const website =  " Vscode"
        // console.log(username + website);
    
    }
    // console.log(website);

}

// console.log(username);


//  ++++++++++++++++++++++++++ intreseting ++++++++++++++++++++++++++++

console.log(addOne(5))

function addOne(num) {
    return num + 1
}


const addTwo = function(num) {
    return num + 2
}
console.log(addTwo(5))