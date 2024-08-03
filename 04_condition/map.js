// Map function

const map = new Map();
map.set("In" , "INDIA")
map.set("Usa","United State of America")
map.set("Pak", "Pakinstan BC")
map.set("Bra", "Brazil")

// console.log(map);

// for (const key of map) {
//     console.log(key);
// }



for (const [key,value] of map) {
    console.log(key + ":-" + value ) ;
}



const location = new Map();
location.set("Chai","Code");
location.set("Dosa","Sambhar");
location.set("Crud","Jalebi");

// let location = new Map();
for (const [dikha, value] of location) {
    console.log(dikha + ":-" + value );
}