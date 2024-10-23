interface IUserService {
    users: number
    getUsersInDatabase(): number
}

class UserService implements IUserService {
    private _users: number = 1000

    set users(num: number) {
        this._users = num
    }

    //@Log() на два сразу ставить нельзя
    get users() {
        return this._users
    }
    @Log()
    getUsersInDatabase(): number {
        throw new Error("Ошибка")
    }
}

function Log() {
    return (
        target: Object,
        _: string | symbol,
        descriptor: PropertyDescriptor
    ) => {
        let set = descriptor.set
        descriptor.set = (...args: any) => {
            console.log(args)
            set?.apply(target, args)
        }
    }
}

let userService = new UserService()
userService.users = 1
console.log(userService)