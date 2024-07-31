const tinderUser = {}

tinderUser.id = "123abc";
tinderUser.name = "Pika";
tinderUser.isLoggedIn = true

console.log(tinderUser);


//Creating Nested Object

const product = {
    names:{
        id:{  
        details: "camera"},
    },
    order_id: {
        sr: "123lele"
    }
}

console.log(product.names.id.details);
console.log(product.order_id.sr);


//Object assign

const object1 = {1: "a", 2: "b"};
const object2 = {3: "c", 4: "d"};

// const object3 = Object.assign({}, object1, object2);    // or instead of using this...we use spread operator----> 
const object3 = {...object1, ...object2}

console.log(object3);


//Object destructure

const tcs = {
    courseName: "TCS ION",
    prise: 2100,
    courseInstructor: "NS"
}

const {courseInstructor: Mentor} = tcs;    //
console.log(Mentor) 

// JSON(JavaScript Object Notation)

// {
//     "name" : "ansh",
//     "code" : 12234,
//     "branch" = "IT"
// }