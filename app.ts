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

let split: <T>(data: Array<T>) => Array<T> = getSplittedHalf

interface ILogLine<T> {
    timeStamp: Date;
    data: T
}

type LogLineType<T> = {
    timeStamp: Date;
    data: T
}

let logLine: ILogLine<{ a: number }> = {
    timeStamp: new Date(),
    data: {
        a: 1
    }
}