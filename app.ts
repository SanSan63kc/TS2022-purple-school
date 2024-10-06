function logMiddleware<T>(data: T): T {
    console.log(data)
    return data
}

let res = logMiddleware("10")

function getSplittedHalf<T>(data: Array<T>): Array<T> {
    let l = data.length / 2
    return data.splice(0, l)
}

getSplittedHalf<number>([1, 2, 3])