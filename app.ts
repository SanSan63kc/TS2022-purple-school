let input: unknown

input = 3
input = ["sf", 1]

let res = input

function run(i: unknown) {
    if (typeof i === "number") {
        i++
    } else {
        i
    }
}

run(input)

async function getData() {
    try {
        await fetch("")
    } catch (error) {
        if (error instanceof Error)
            console.log(error.message)
    }
}

async function getDataForce() {
    try {
        await fetch("")
    } catch (error) {
        let e = error as Error
        console.log(e.message)
    }
}

type U1 = unknown | null

type I1 = unknown & string