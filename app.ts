enum PaymentStatus {
    Holded,
    Processed,
    Reversed
}

class Payment {
    id: number;
    status: PaymentStatus

    createdAt: Date;
    updatedAt: Date;

    constructor(id: number) {
        this.id = id
        this.createdAt = new Date()
        this.status = PaymentStatus.Holded
    }

    getPaymentLifeTime(): number {
        return new Date().getTime() - this.createdAt.getTime()
    }

    unholdPayment(): void {
        if (this.status === PaymentStatus.Processed) {
            throw new Error("Платёж не может быть возвращен")
        }
        this.status = PaymentStatus.Reversed
        this.updatedAt = new Date()
    }
}

let payment = new Payment(1)
payment.unholdPayment()
console.log(payment)
let time = payment.getPaymentLifeTime()
console.log(time)