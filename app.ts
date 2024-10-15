interface IUserService {
    users: number
    getUsersInDatabase(): number
}

@nullUser
@setUsers(2)
@threeUserAdvanced
@setUserAdvanced(4)
class UserService implements IUserService {
    users: 1000
    getUsersInDatabase(): number {
        return this.users
    }
}

function nullUser(target: Function) {
    target.prototype.users = 0
}

function setUsers(users: number) {
    return (target: Function) => {
        target.prototype.users = users
    }
}

function log(users: number) {
    return (target: Function) => {
        
    }
}

function setUserAdvanced(users: number) {
    return <T extends { new(...args: any[]): {} }>(constructor: T) => {
        return class extends constructor {
            users = 3
        }
    }
}

function threeUserAdvanced<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        users = 3
    }
}

console.log(new UserService().getUsersInDatabase())