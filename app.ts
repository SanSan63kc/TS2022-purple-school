interface IUserService {
    users: number
    getUsersInDatabase(): number
}

class UserService implements IUserService {
    users: number = 1000

    @Catch()
    getUsersInDatabase(): number {
        throw new Error("Ошибка")
    }
}

function Catch(rethrow: boolean = false) {
    return (
        target: Object,
        _: string | symbol,
        descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
    ): TypedPropertyDescriptor<(...args: any[]) => any> | void => {
        let method = descriptor.value
        descriptor.value = async (...args: any[]) => {
            try {
                let res = await method?.apply(target, args)
                return res
            } catch(e) {
                if (e instanceof Error){
                    console.log(e.message)
                    if (rethrow){
                        throw e
                    }
                }
            }
        }
    }
}