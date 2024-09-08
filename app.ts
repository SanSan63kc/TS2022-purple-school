class User {
    name: string;
    age: number;

    constructor()
    constructor(name: string)
    constructor(name: string, age: number)
    constructor(ageOrName?: string | number, age?: number) {
        if (typeof ageOrName === "string") {
            this.name = ageOrName
        } else if(typeof ageOrName === "number"){
            this.age = ageOrName
        }
        if (typeof age === "number") {
            this.age = age
        }
    }
}

let user = new User("saa")
let user4 = new User("saa", 33)
let user2 = new User()
let user3 = new User(33)
