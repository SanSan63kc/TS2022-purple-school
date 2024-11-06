"use strict";
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
exports.__esModule = true;
exports.Product = exports.Package = exports.DeliveryShop = void 0;
var DeliveryItem = /** @class */ (function () {
    function DeliveryItem() {
        this.items = [];
    }
    DeliveryItem.prototype.addItem = function (item) {
        this.items.push(item);
    };
    DeliveryItem.prototype.getItemPrices = function () {
        return this.items.reduce(function (acc, i) { return acc += i.getPrice(); }, 0);
    };
    return DeliveryItem;
}());
var DeliveryShop = /** @class */ (function (_super) {
    __extends(DeliveryShop, _super);
    function DeliveryShop(deliveryFee) {
        var _this = _super.call(this) || this;
        _this.deliveryFee = deliveryFee;
        return _this;
    }
    DeliveryShop.prototype.getPrice = function () {
        return this.getItemPrices() + this.deliveryFee;
    };
    return DeliveryShop;
}(DeliveryItem));
exports.DeliveryShop = DeliveryShop;
var Package = /** @class */ (function (_super) {
    __extends(Package, _super);
    function Package() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Package.prototype.getPrice = function () {
        return this.getItemPrices();
    };
    return Package;
}(DeliveryItem));
exports.Package = Package;
var Product = /** @class */ (function (_super) {
    __extends(Product, _super);
    function Product(price) {
        var _this = _super.call(this) || this;
        _this.price = price;
        return _this;
    }
    Product.prototype.getPrice = function () {
        return this.price;
    };
    return Product;
}(DeliveryItem));
exports.Product = Product;
var shop = new DeliveryShop(100);
shop.addItem(new Product(1000));
var pack1 = new Package();
pack1.addItem(new Product(100));
pack1.addItem(new Product(200));
shop.addItem(pack1);
var pack2 = new Package();
pack2.addItem(new Product(30));
shop.addItem(pack2);
console.log(shop.getPrice());
