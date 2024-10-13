type ReadOrWrite = "read" | "write"
type Bulk = "bulk" | ""

type Access = `can${Capitalize<ReadOrWrite>}${Capitalize<Bulk>}`

type ReadOrWriteBulk<T> = T extends `can${infer R}` ? R : never

type T = ReadOrWriteBulk<Access>

type ErrorOrSucces = "error" | "success"

interface ResponseT {
    result: `http${Capitalize<ErrorOrSucces>}`
}

let a: ResponseT = {
    result: "httpSuccess"
}