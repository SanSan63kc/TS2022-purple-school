"use strict";
class Controller {
    handleWithLogs(req) {
        console.log("Start");
        this.handle(req);
        console.log("End");
    }
}
//new Controller() - нельзя
class UserController extends Controller {
    handle(req) {
        console.log(req);
    }
}
let c = new UserController();
c.handleWithLogs("Request");
