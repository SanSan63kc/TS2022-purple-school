class User {
    name: string;

    constructor(name: string) {
        this.name = name
    }
}

let user = new User("saa")
console.log(user)
user.name = "Alex"
console.log(user)

class Admin {
    role!: number;
}

let admin = new Admin()
admin.role = 1