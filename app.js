"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var UserService = /** @class */ (function () {
    function UserService() {
        this._users = 1000;
    }
    UserService.prototype.getUsersInDatabase = function () {
        return this._users;
    };
    UserService.prototype.setUsersInDatabase = function (num) {
        this._users = num;
    };
    return UserService;
}());
function Positive() {
    return function (target, propertyKey, _) {
        console.log(Reflect.getOwnMetadata("design:type", target, propertyKey));
        console.log(Reflect.getOwnMetadata("design:paramsType", target, propertyKey));
        console.log(Reflect.getOwnMetadata("design:returnType", target, propertyKey));
    };
}
/* let userService = new UserService()
console.log(userService) */
console.log(UserService);
