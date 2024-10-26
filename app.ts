interface IUserService {
    getUsersInDatabase(): number
}

class UserService implements IUserService {
    private _users: number = 1000

    getUsersInDatabase(): number {
        return this._users
    }

    setUsersInDatabase(@Positive() num: number): void {
        this._users = num
    }
}

function Positive() {
    return (
        target: Object,
        propertyKey: string | symbol,
        parameterIndex: number
    ) => {
        console.log(target)
        console.log(propertyKey)
        console.log(parameterIndex)
    }
}

let userService = new UserService()
userService.users = 1
console.log(userService)