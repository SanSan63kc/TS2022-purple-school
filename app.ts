enum RequestType {
    GET = "get",
    POST= "post"
}

function fetchWithAuth(url: string, method: "post" | "get"){}

let a = "asasd"

fetchWithAuth("s", "post")

let method = "post"

fetchWithAuth("s", method as "post")