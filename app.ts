function logId(id: string | number): void {
    console.log(id)
}

let a = logId(1)

function multiply(f: number, s?: string): number | void {
    if (!s) {
        return f * f
    }
    /* return f * s */
}

type voidFunction=()=>void


let f1: voidFunction = ()=>{}
let f2: voidFunction = ()=>{
    return true
}

let b = f2()

let skills = ["Dev", "DevOps"]

let user = {
    s:["s"]
}

skills.forEach((skill)=>user.s.push(skill))