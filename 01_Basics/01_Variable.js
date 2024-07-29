const accountID = 12345
let accountEmail = "mransh901@gmail.com";
var accountPassword = "121212"
accountCity = "Lucknow"

//accountID = 12;
//console.log(accountID);  Const value does not change....not allowed.

 accountEmail = "mrdikshaansh@gmail.com";
console.log(accountEmail);

accountPassword = "78910"
accountCity = "Ballia"
let accountState;
// console.log(typeof accountState);

/*Prefer not to use "var" because of issue in block scope and functional scope. */

console.table([accountID, accountEmail, accountPassword, accountCity, accountState]);