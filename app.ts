let a1: number = Math.random() > 0.5 ? 1 : 0

interface HTTPResponse<T extends "success" | "failed"> {
    code: number;
    data: T extends "success" ? string : Error;
    /* data2: T extends "success" ? string : number */
    /*  additionalData: string | number */
}

let suc: HTTPResponse<"success"> = {
    code: 200,
    data: "done"
}

let err: HTTPResponse<"failed"> = {
    code: 200,
    data: new Error()
}

class User {
    id: number;
    name: string;
}

class UserPersistend extends User {
    dbId: string
}

function getUser(id: number): User
function getUser(dbId: string): UserPersistend
function getUser(dbOrId: string | number): User | UserPersistend {
    if (typeof dbOrId === "number") {
        return new User()
    } else {
        return new UserPersistend
    }
}

type UserOrUserPersistend<T extends string | number> = T extends number ? User : UserPersistend

function getUser2<T extends string | number>(id: T): UserOrUserPersistend<T> {
    if (typeof id === "number") {
        return new User() as UserOrUserPersistend<T>
    } else {
        return new UserPersistend() as UserOrUserPersistend<T>
    }
}

let res3 = getUser2(1)
let res4 = getUser2("123")