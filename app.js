"use strict";
class User {
    constructor(name) {
        this.name = name;
    }
}
class Users extends Array {
    searchByName(name) {
        return this.filter(u => u.name === name);
    }
    toString() {
        return this.map(u => u.name).join(", ");
    }
}
let users = new Users();
users.push(new User("saa"));
users.push(new User("alex"));
console.log(users.toString());
