var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var KVDatabase = /** @class */ (function () {
    function KVDatabase() {
        this.db = new Map();
    }
    KVDatabase.prototype.save = function (key, value) {
        this.db.set(key, value);
    };
    return KVDatabase;
}());
var PersistentDB = /** @class */ (function () {
    function PersistentDB() {
    }
    PersistentDB.prototype.savePersistent = function (data) {
        console.log(data);
    };
    return PersistentDB;
}());
var PersistentDBAdapter = /** @class */ (function (_super) {
    __extends(PersistentDBAdapter, _super);
    function PersistentDBAdapter(database) {
        var _this = _super.call(this) || this;
        _this.database = database;
        return _this;
    }
    PersistentDBAdapter.prototype.save = function (key, value) {
        this.database.savePersistent({ key: key, value: value });
    };
    return PersistentDBAdapter;
}(KVDatabase));
function run(base) {
    base.save("key", "myValue");
}
run(new PersistentDBAdapter(new PersistentDB));
