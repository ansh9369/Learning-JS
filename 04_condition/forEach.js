const coding = ["JS","C","Py","CPP","Java","Ruby"];

// coding.forEach( function (temp) {
//     console.log(temp);
// } )

// another methoad is ...(arrayName)
// console.log(...coding);


//Another one method
// coding.forEach( (temp) => {
//     console.log(temp);
// }  )


//By using created function for printing array element
// function printMe(item) {
//     console.log(item);
// }
// coding.forEach(printMe)


//Accessing array element by using for loop
// for (let i = 0; i < coding.length; i++) {
//     const element = coding[i];
//     console.log(element);
// }


//Finding index, item and array elements in array.
// coding.forEach( (item, index, array) => {
//     console.log(item, index, array);
// } )


// 
const myConstructor = [
    {
        customerName: "Dipti",
        customerAge: 21,
    },
    {
        customerName: "Nikita",
        customerAge: 24,
    },
    {
        customerName: "Sadhna",
        customerAge: 23,
        customerDegree: "Diploma"
    }
]

myConstructor.forEach((details)=>{
    console.log(`Customer age is ${details.customerName} and their age is ${details.customerAge}.`);
    
})