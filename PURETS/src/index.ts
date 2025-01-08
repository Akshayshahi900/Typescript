class User {
    private _CourseCount = 1
    readonly city: string = "jaipur"
    constructor(
        public name: string,
        public email: string
    ) {
        this.name = name;
        this.email = email;
    }
    get getAppleEmail(): string {
        return `apple${this.email}`
    }

    get courseCount():number{
        return this._CourseCount
    }
    set courseCount(courseNum){
       if(courseNum <=1){
        throw new Error("course count should be more than 1")
       }
       this._CourseCount = courseNum
    }
}
class Subuser extends User{
    isFamily: boolean= true
    changecourseCount(){
     this.courseCount =4;
    }
}
// class User {
//     public name: string
//     email: string
//     private readonly city: string = ""
//     constructor(name: string, email: string) {
//         this.name = name;
//         this.email = email;
//     }
// }
let Akshay = new User("akshay", "a@gmail,com")
// Akshay.city = "London"
Akshay.email = "a@a.com"
Akshay.name = "akshay"




