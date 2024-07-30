const marval_heros = ["Thor","Ironman","Spiderman","Captain-America"];
const dc_heros = ["Superman", "Aquaman", "Batman"];

// marval_heros.push(dc_heros);
// console.log(marval_heros);
// console.log(marval_heros[4][0]);    //giving the value in array from 2nd array of index 0 value which is "Superman".

//Concatinate

const heros = marval_heros.concat(dc_heros)
console.log(heros);

const allHeros = [...dc_heros,...marval_heros];
console.log(allHeros);


// Using flat for organizing array under array problem.

const arr1 = [1,2,3,5,3,2,9,43,64,23,21,[34.3,54,23,1,43]];

const flatedArr = arr1.flat(Infinity);
console.log(flatedArr)


//creating string,object from Array

console.log(Array.isArray("Ansh"));
console.log(Array.from("Ansh"));   ///they Created array for me.

//creating array from using multiple variable.

let x = "Ansh";
let y = "Rathore";
let z = "No1";

console.log(Array.of(x,y,z));
