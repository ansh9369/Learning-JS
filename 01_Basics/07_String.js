const Name = "Ansh-Rathore";
const repoCount = 21

// using Backtick (${}) to print output\\

console.log(`My name is ${Name} and repoCount is ${repoCount}`);

const clanName = new String('Ansh Rathore'); 

console.log(clanName.length);
console.log(clanName.toUpperCase());
console.log(clanName.charAt(5));
console.log(clanName.indexOf('h'));

const newString = clanName.substring(0,4);
console.log(newString);

const anotherString = clanName.slice(-2, 2)
console.log(anotherString);

const Arr = ["Apple", "Banana", "cherry","Mango"];
const citrus = Arr.slice(1,3);
console.log(citrus);