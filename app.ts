class UserService{
    private static db: any;

    static getUser(id: number){
        return UserService.db.findById(id)
    }

    create(){
        UserService.db
    }

    static{
       UserService.db = "sdf" 
    }
}

UserService.getUser(1)

let inst = new UserService()
inst.create()