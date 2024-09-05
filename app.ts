interface User {
    login: string,
    password?: string
}

let user: User = {
    login: "a@a.ru",
    password: "1"
}

function multiply(first: number, second?: number): number {
    if (!second) {
        return first * first
    }
    return first * second
}

interface UserPro {
    login: string,
    password?: {
        type: "primary" | "secondary"
    }
}

function testPass(user: UserPro){
    let t = user.password?.type
}

function test(param? : string){
    let t = param ?? multiply(5)
}