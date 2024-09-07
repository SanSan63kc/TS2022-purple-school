let n: null = null
let n1: any = undefined
/* let n2: number = null
let n2: string = null
let n2: undefined = null */

interface User {
    name: string
}

function getUser()/* : User */ {
    if (Math.random() > 0.5) {
        return
    } else {
        return {
            name: "saa"
        } as User
    }
}

let user = getUser()
/* let n5 = user.name */