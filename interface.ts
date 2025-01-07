interface User {
    readonly dbid: number,
    email: string,
    userId: string,
    googleId?: string,
    // startTrail: () => string
    startTrail():string
    getCoupon(couponname:string , discount:number) : number
}

const akshay: User = {
    dbid: 111, email: "askdfh@gmail.com", userId: "1234"
    , startTrail: () => {
        return "trial is started."
    },
    getCoupon(name:"akshay", off:45){
        return 56
    }
}
akshay.email = "ghfjk@gmail.com"

akshay.startTrail = ()=>{
    return "Redefining the trail period"
}