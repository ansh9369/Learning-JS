let i = 0;
while (i<=12) {
    console.log(`value is ${i}`);
    i = i + 2;
}


/// Creating array and printing them by using while loop

let myArr  = ["Akm","Scarl","M24","AWM"];
console.log(myArr.length)
let f = 0;
while (f < myArr.length) {
    console.log(`value is ${myArr[f]}`)
    f = ++f;
}

/// do while loop

let x = 11;
do {
    console.log(`value is ${x}`)
    x++;
} while (x<=10);