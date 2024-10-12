type Modifier = "read" | "write" | "update"

type UserRoles = {
    customers?: Modifier,
    projects?: Modifier,
    adminPanel?: Modifier
}

type ModifierToAccess<Type> = {
    + readonly [Property in keyof Type as Exclude<`canAccess${string & Property}`, "canAccessAdminPanel">]-?: boolean
}

type UserToAccess2 = ModifierToAccess<UserRoles>

type UserAccess = {
    customers?: boolean,
    projects?: boolean,
    adminPanel?: boolean
}