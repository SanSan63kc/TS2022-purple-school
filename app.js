"use strict";
class User {
    constructor(name) {
        this.name = name;
    }
}
let user = new User("saa");
console.log(user);
user.name = "Alex";
console.log(user);
