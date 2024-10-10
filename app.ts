interface IUser {
    name: string;
    age: number;
}

type KeysOfUser = keyof IUser

let key: KeysOfUser = "age"

function getValue<T, K extends keyof T>(obj: T, key: K){
    return obj[key]
}

let user: IUser = {
    name: "saa",
    age: 34
}

let userName = getValue(user, "name")