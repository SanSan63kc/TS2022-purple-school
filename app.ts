interface ILogger{
    log(...args: any[]): void
    error(...args: any[]): void
}

class Logger implements ILogger{
    log(...args: any[]): void {
        console.log(...args)
    }
    async error(...args: any[]): Promise<void> {
        // кинуть во внешнюю систему
        console.log(...args)
    }
}

interface IPayable{
    pay(paymentID: number): void
    price?: number
}

interface IDEletable{
    delete(): void
}

class User implements IPayable, IDEletable{
    delete(): void {
        throw new Error("Method not implemented.")
    }
    pay(paymentID: number | string): void {
        //
    }
    price?: number | undefined
}
