function sum(){
    let a = 4;
    let b = 4;
    return a+b;
}
const result = sum();
console.log(result);


/// parameterize function

function add(a,b){
    console.log(a+b);
}
add(3,18);


//// Function calling 

function logInUserMessage(userName){
    if(!userName){
        console.log("Please Enter a userName");
        return ;
    }
    return `${userName} just logged in`
}
console.log(logInUserMessage())


//// Using rest operator for taking multiple input of user 

function calculateCartPrize(...items){
    return items
}
console.log(calculateCartPrize(12,21,32,43,54,2,132,12,4,32));

function calculateCartPrize(val1, val2, ...items){
    return items
}
console.log(calculateCartPrize(12,21,32,43,54,2,132,12,4,32));




// Creating object and calling through function

// const user = {
//     name: "Ansh",
//     price: 221.
// }

function handle(yeKrde){
    console.log(`The username is ${yeKrde.name} and price is ${yeKrde.price}.`);
}

// handle(username)

//Directly creating object by using -----> this type
 handle({
    name: "ABC",
    price: 399
})


// create an array and find the second value of the array.
const arr =  [100, 200, 300, 400, 500]
// return arr[1];

function getSecondValue(x){
    return x[2];
};
console.log(getSecondValue(arr));