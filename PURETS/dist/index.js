"use strict";
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this._CourseCount = 1;
        this.city = "jaipur";
        this.name = name;
        this.email = email;
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._CourseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("course count should be more than 1");
        }
        this._CourseCount = courseNum;
    }
}
class Subuser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changecourseCount() {
        this.courseCount = 4;
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
let Akshay = new User("akshay", "a@gmail,com");
// Akshay.city = "London"
Akshay.email = "a@a.com";
Akshay.name = "akshay";
