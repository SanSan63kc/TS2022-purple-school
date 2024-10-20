interface IUserService {
    users: number
    getUsersInDatabase(): number
}

class UserService implements IUserService {
    users: number = 1000

    @Log
    getUsersInDatabase(): number {
        throw new Error("Ошибка")
    }
}

function Log(
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
): TypedPropertyDescriptor<(...args: any[]) => any> | void {
    console.log(target)
    console.log(propertyKey)
    console.log(descriptor)
    let oldValue = descriptor.value
    descriptor.value = () => {
        console.log("no error")
    }
}

console.log(new UserService().getUsersInDatabase())