interface User {
    readonly dbid: number,
    email: string,
    userId: string,
    googleId?: string,
    // startTrail: () => string
    startTrail(): string
    getCoupon(couponname: string, discount: number): number
}
interface User {
    githubtoken: string,
}
interface Admin extends User {
    role: "admin" | "ta" | "learner",
}
const akshay: Admin = {
    dbid: 111, email: "askdfh@gmail.com", userId: "1234"
    , role: "ta",
    startTrail: () => {
        return "trial is started."
    },
    githubtoken: "1243asdf",
    getCoupon(name: "akshay", off: 45) {
        return 56
    }
}
akshay.email = "ghfjk@gmail.com"

akshay.startTrail = () => {
    return "Redefining the trail period"
}