var Notify = /** @class */ (function () {
    function Notify() {
    }
    Notify.prototype.send = function (template, to) {
        console.log("\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u044E ".concat(template, ": ").concat(to));
    };
    return Notify;
}());
var Log = /** @class */ (function () {
    function Log() {
    }
    Log.prototype.log = function (message) {
        console.log(message);
    };
    return Log;
}());
var Template = /** @class */ (function () {
    function Template() {
        this.templates = [
            { name: "other", template: "<h1>Шаблон</h1>" }
        ];
    }
    Template.prototype.getByName = function (name) {
        return this.templates.find(function (t) { return t.name === name; });
    };
    return Template;
}());
var NotificationFacade = /** @class */ (function () {
    function NotificationFacade() {
        this.notify = new Notify();
        this.template = new Template();
        this.logger = new Log();
    }
    NotificationFacade.prototype.send = function (to, templateName) {
        var data = this.template.getByName(templateName);
        if (!data) {
            this.logger.log(" Не найден шаблон");
            return;
        }
        this.notify.send(data.template, to);
        this.logger.log("шаблон отправлен");
    };
    return NotificationFacade;
}());
var s = new NotificationFacade();
s.send("a@a.ru", "other");
