if(true){
let x = 10;
const y  = 20;
var z = 30;

// scope ke andar ki value bahar nhi jani cahea....wahi hota hai scope{}....lein yaha var c = 30 ki value bahar bhi access ho rhi hai.
}
// console.log(x)
// console.log(y)
console.log(z) // Here we seen that our var printing the valur of z in console....


// Creating function under function

function one(){
    const username = "Saheb"
    function two(){
        const age = 21;
        console.log(age);
    }
    two();
    console.log(username);
}
one();/
