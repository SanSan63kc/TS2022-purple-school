interface Role{
    name: string
}

interface User {
    name: string
    roles: Role[]
    permission: Permission
}

interface Permission {
    endDate: Date
}

let user: User = {
    name: "Alex",
    roles: [],
    permission: {
        endDate: new Date()
    }
}

let nameUser = user["name"]
let roleNames: "roles" = "roles"

type rolesType = User["roles"]
type roleType2 = User[typeof roleNames]

type roleType = User["roles"][number]
type dateType = User["permission"]["endDate"]

let roles = ["admin", "user", "super-user"] as const
type roleTypes = typeof roles[number]