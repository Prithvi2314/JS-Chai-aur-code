const accountId = 144553
let accountEmail = "prithvi@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;


//accountId = 2// not allowed

accountEmail = "pt@pt.com"
accountPassword = "212121"
accountCity = "hyderabad"


console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functinal scope
*/

console.table([ accountId, accountEmail, accountPassword, accountCity, accountState])