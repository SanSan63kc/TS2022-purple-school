let a = 5
let b: string = a.toString()
let e = new String(a)
let f: boolean = new Boolean(a).valueOf()

let c = "saa"
let d: number = +c

interface User {
    name: string;
    email: string;
    login: string
}

let user: User = {
    name: "saa",
    email: "a2a.ru",
    login: "saa63"
}

interface Admin {
    name: string;
    role: number
}

let admin: Admin = {
    ...user,
    role: 1
}

function userToAdmin(user: User): Admin {
    return {
        name: user.name,
        role: 1
    }
}