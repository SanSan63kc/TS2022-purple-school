var PaymentAPI = /** @class */ (function () {
    function PaymentAPI() {
        this.data = [{ id: 1, sum: 10000 }];
    }
    PaymentAPI.prototype.getPaymentDetails = function (id) {
        return this.data.find(function (d) { return d.id === id; });
    };
    return PaymentAPI;
}());
var PaymentAccessProxy = /** @class */ (function () {
    function PaymentAccessProxy(api, userId) {
        this.api = api;
        this.userId = userId;
    }
    PaymentAccessProxy.prototype.getPaymentDetails = function (id) {
        if (this.userId === 1) {
            return this.api.getPaymentDetails(id);
        }
        console.log("Попытка получить данные платежа");
        return undefined;
    };
    return PaymentAccessProxy;
}());
var proxy = new PaymentAccessProxy(new PaymentAPI(), 1);
console.log(proxy.getPaymentDetails(1));
var proxy2 = new PaymentAccessProxy(new PaymentAPI(), 2);
console.log(proxy2.getPaymentDetails(1));
