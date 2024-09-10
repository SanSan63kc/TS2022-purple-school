"use strict";
class Payment {
    constructor() {
        this.date = new Date();
        this.getDateArrow = () => {
            return this.date;
        };
    }
    getDate() {
        return this.date;
    }
}
let pay = new Payment();
let user = {
    id: 1,
    paymentDate: pay.getDate.bind(pay),
    paymentDateArrow: pay.getDateArrow
};
/* console.log(pay.getDate())
console.log(user.paymentDate())
console.log(user.paymentDateArrow()) */
class PaymentPersistant extends Payment {
    save() {
        return super.getDate();
    }
}
console.log(new PaymentPersistant().save());
