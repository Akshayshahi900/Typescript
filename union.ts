let score: number | string = 0;
// | is used to add data types that can be possible in the variable and named as union
score = 55
score = "33"

type user = {
    name: string,
    id: number
}
type admin = {
    username: string,
    id: number
}

let person: user | admin = { name: "as", id: 443 }
let person2: user | admin = { username: "aks", id: 443 }

// function getDbId(id: number | string){
//     console.log(`Db id is : ${id}`)
// }
function getDbId(id: number | string) {
    if (typeof id === "string") {
        id.toLowerCase()
    }
    if (typeof id === "number") {
        id.toExponential();
    }

}
console.log(getDbId(4));
let data1: string[] = ["1", "2", "3"]
let data2: number[] = [1, 2, 3]

// let data3: string| number[] = [1,2,3 ,"akshay"]; // the data can be of string or a number array not a string array or number array
let data3: (string | number | boolean)[] = [1, 2, 3, "akshay", true];


let seatAllotment: "aisle" | "window" | "middle"

seatAllotment = "window"
// seatAllotment ="crew" this is not the type in declaration






export { }
