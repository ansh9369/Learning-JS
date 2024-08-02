// Printing 01 to 10

// const index;
// for(let index = 1; index <=10; index++){
//     const element = index;
//     console.log(element);
// }


// Printing table 1 to 10.

// for (let i = 1; i <= 10; i++){
//     console.log(`Table: ${i}`);
//     for(let j = 1; j <= 10; j++) {
//         console.log(i + "*" + j + "=" + i*j)
//     }
// }



// Printing table 0 - 10 

// for (let a=0; a < 11; a++){
//     console.log(`Table: ${a}`);
//     for (let b = 1; b < 11; b++) {
//         console.log(a + "*" + b + "=" + a*b);
//     }
// }


// Printing only table of 5.

for (let i = 1; i<=10; i++){
    console.log(i + " * " + 5 + " = " + i*5);
}



// Checking Odd and Even number.

for(let i = 0; i<=50; i++){
    if(i%2==0){
        console.log(i + "   Even Number");
    }
    else{
        console.log(i + "   Odd Number.")
    }
}

// Printing array element in output

let myArray = [20,57,98,386,48,2736,"Ansh","Anuj","Sachin"];
console.log(myArray.length);
for(let i = 0; i< myArray.length; i++){
    let element = myArray[i];
    console.log(element)
}


// forof loop

let array  = [12,24,3546,76,32,1,3,5,6,4,32,1,34,5,56,544,44,];
for (const num of array) {
    console.log(num);
}

// for(const x of array){
//     console.log(x);
// }