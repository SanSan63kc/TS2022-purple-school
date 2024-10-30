var MyMap = /** @class */ (function () {
    function MyMap() {
        this.map = new Map();
    }
    MyMap.prototype.clean = function () {
        this.map = new Map();
    };
    MyMap.get = function () {
        if (!MyMap.instance) {
            MyMap.instance = new MyMap();
        }
        return MyMap.instance;
    };
    return MyMap;
}());
var Service1 = /** @class */ (function () {
    function Service1() {
    }
    Service1.prototype.addMap = function (key, value) {
        var myMap = MyMap.get();
        myMap.map.set(key, value);
    };
    return Service1;
}());
var Service2 = /** @class */ (function () {
    function Service2() {
    }
    Service2.prototype.getKeys = function (key) {
        var myMap = MyMap.get();
        console.log(myMap.map.get(key));
        myMap.clean();
        console.log(myMap.map.get(key));
    };
    return Service2;
}());
new Service1().addMap(1, "Работает");
new Service2().getKeys(1);
