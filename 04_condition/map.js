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