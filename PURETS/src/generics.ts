const score: Array<number> = []
const names: Array<string> = []


function identityOne(val: boolean | number): boolean | number {
    return val
}

function identityTwo(val: any): any {
    return val
}

function identityThree<Type>(val: Type): Type {
    return val
}
identityThree("3")

function identityFour<T>(val: T): T {
    return val
}
// it can be any letter instead of t

interface Bottle {
    brand: string,
    type: number
}

identityFour<Bottle>({ brand: "evan", type: 3 })

function getSearchProducts<T>(products: T[]): T {
    //do some database operation
    const myIndex = 3
    return products[3]
}

const getMoreSearchProducts =<T>(products: T[]):T =>{
//do more database operations
const myIndex = 4
return products[myIndex]

}

interface Database{
    connection:string,
    username:string,
    password:string,
}
function anotherFunction<T ,U extends Database>(valOne:T, valTwo:U):object{
    return{
        valOne,
        valTwo
    }
}

// anotherFunction(3,{})


interface Quiz{
    name:string,
    type:string
}

interface Course{
    name:string,
    author:string,
    subject:string
}
class Sellable<T,>{
    public cart:T[]= []

    addToCart(products:T){
        this.cart.push(products)
    }
    
}