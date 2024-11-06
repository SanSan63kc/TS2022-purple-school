interface IMiddleware {
    next(mid: IMiddleware): IMiddleware
    handle(request: any): any
}

abstract class AbstractMiddleware implements IMiddleware {
    private nextMiddleware: IMiddleware
    next(mid: IMiddleware): IMiddleware {
        this.nextMiddleware = mid
        return mid
    }
    handle(request: any) {
        if (this.nextMiddleware) {
            return this.nextMiddleware.handle(request)
        }
        return
    }
}

class AuthMiddleware extends AbstractMiddleware {
    override handle(request: any){
        console.log("AuthMiddleware")
        if (request.userId === 1){
            return super.handle(request)
        }
        return {error: "вы не авторизованы"}
    }
}

class ValidateMiddleware extends AbstractMiddleware{
    override handle(request: any){
        if (request.body){
            return super.handle(request)
        }
        return {error: "нет body"}
    }
}

class Controller extends AbstractMiddleware{
    override handle(request: any){
        console.log("Контроллер")
        return {success: request}
    }
}

let controller = new Controller()
let validate = new ValidateMiddleware()
let auth = new AuthMiddleware()

auth.next(validate).next(controller)

console.log(auth.handle({
    userId: 3
}))