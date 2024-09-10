class Payment {
    private date: Date = new Date()

    getDate(this: Payment) {
        return this.date
    }

    getDateArrow = () => {
        return this.date
    }
}

let pay = new Payment()

let user = {
    id: 1,
    paymentDate: pay.getDate.bind(pay),
    paymentDateArrow: pay.getDateArrow
}

/* console.log(pay.getDate())
console.log(user.paymentDate())
console.log(user.paymentDateArrow()) */

class PaymentPersistant extends Payment {
    save(){
        return this.getDateArrow()
    }
}

console.log(new PaymentPersistant().save())