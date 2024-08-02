const obj = {
    firstName: "Karma",
    lastName: "Sharma",
    age: 42,
    location: "Trivantpuram",
    isLoggedIn: "yes",
    isLoggedInDay: ["Monday", "Saturday"]
};

console.log(obj.age);
console.log(obj);
console.log(obj["age"]);
console.log(obj.lastName);

// calculating array is empty or not.

const std = {}
if(Object.keys(std).length === 0){
    console.log("Object is Empty");
}