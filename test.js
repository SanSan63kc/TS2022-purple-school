"use strict";
class Logger {
    printDate(date) {
        this.log(date.toString());
    }
}
class MyLogger extends Logger {
    log(message) {
        console.log(message);
    }
    logWithDate(message) {
        this.printDate(new Date());
        this.log(message);
    }
}
let logger = new MyLogger();
logger.logWithDate("Моё сообщение");
