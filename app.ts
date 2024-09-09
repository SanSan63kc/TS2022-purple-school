class User {
    _login: string
    password: string
    createdAt: Date

    set login(l: string | number) {
        this._login = "user_" + l
        this.createdAt = new Date()
    }

    get login() {
        return this._login
    }

    async getPassword(p: string){

    }

    /* setPassword(p: string){
        sync
    } */
}

let user = new User()
user.login = "myLogin"