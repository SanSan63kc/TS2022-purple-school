abstract class Logger {
    abstract log(message: string): void

    printDate(date: Date){
        this.log(date.toString())
    }
}

class MyLogger extends Logger{
    log(message: string): void{
        console.log(message)
    }

    logWithDate(message: string){
        this.printDate(new Date())
        this.log(message)
    }
}

let logger = new MyLogger()
logger.logWithDate("Моё сообщение")