enum StatusCode {
    SUCCESS = 1,
    IN_PROCESS = 3,
    FAILED = 10
}

let res = {
    message: "Платёж успешен",
    statusCode: StatusCode.SUCCESS
}

if (res.statusCode = StatusCode.SUCCESS) {

}

function action(status: StatusCode) {

}

action(StatusCode.SUCCESS)
action(1)
action(3)

let compute = () => {
    return 3
}

const enum Roles {
    ADMIN = 1,
    USER = 2
}

let res2 = Roles.ADMIN