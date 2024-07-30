const tinderUser = {}

tinderUser.id = "123abc";
tinderUser.name = "Pika";
tinderUser.isLoggedIn = true

console.log(tinderUser);


//Creating Nested Object

const product = {
    names:{
        id:{  
        details: "cameraman"},
    },
    order_id: {
        sr: "123lele"
    }
}

console.log(product.names.id.details);
console.log(product.order_id.sr);
