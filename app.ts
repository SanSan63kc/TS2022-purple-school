type PaymentStatus1 = "new" | "paid"

class Payment {
    id: number
    status: PaymentStatus1 = "new"

    constructor(id: number) {
        this.id = id
    }

    pay() {
        this.status = "paid"
    }
}

class PersistedPayment extends Payment {
    databaseId: number
    paidAt: Date

    constructor() {
        let id = Math.random()
        super(id)
    }

    save() {
        // сохраняет базу
    }

    override pay(date?: Date) {
        super.pay()
        this.status = "paid"
        if (date) {
            this.paidAt = date
        }
    }
}