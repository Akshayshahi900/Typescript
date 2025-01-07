function addTwo(num: number): number {
    return num + 2
    // return "hello"
}
addTwo(7)

function toUpper(val: string) {
    return val.toLocaleUpperCase
}

toUpper("akshay")

function signUpUser(name: string, email: string, isPaid: boolean) { }

signUpUser("akshay", "akshay@dev.co", false)

let loginUser = (name: string, email: string, isPaid: boolean = false) => { }
loginUser("akshay", "ak@dev.dom")

// function getValue(myVal:number):string{
// if(myVal>5){
//     return true
// }
// return "200 OK"
// }

const getHello = (s: string): string => {
    return ""
}

const heros = ["thor", "spiderman", "ironman"]

heros.map((hero): string => {
    return `Iam ${hero}`
})

// function createUser({ name: string, email: string, isPaid: boolean }) { }
// createUser({ name: "akshay", email: "akshay.dev", isPaid: false })

function createCourse(): { name: string, isPrice: boolean } {
    return { name: "", isPrice: false }
}

type User = {
    readonly _id: string; // cannot change the values of the variables assigned using readonly
    name: string,
    email: string,
    isActive: boolean,
    creditCardDetails?: number //optional details uses ? before :

};

let myUser: User = {
    _id: "1243523456",
    name: "a",
    email: "a@gmail.com",
    isActive: false,

}
type CardNumber = {
    cardnumber: string
}
type CardDate = {
    carddate: string,
}
type CardDetails = CardNumber & CardDate & {
    cvv: number,
}

myUser.email = "b@gmail.com" //allowed
// myUser._id = "68496868496" // notallowed

export { }