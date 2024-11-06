interface IMediator {
    notify(sender: string, event: string): void
}

abstract class Mediated {
    mediator: IMediator
    setMediator(mediator: IMediator) {
        this.mediator = mediator
    }
}

class Notifications {
    send() {
        console.log("Отправляю уведомление")
    }
}

class Log {
    log(message: string) {
        console.log(message)
    }
}

class EventHandler extends Mediated {
    myEvent() {
        this.mediator.notify("EventHandler", "myEvent")
    }
}

class NotificationMediator implements IMediator {
    constructor(
        public notifications: Notifications,
        public logger: Log,
        public handler: EventHandler
    ) { }
    notify(sender: string, event: string): void {
        switch (event) {
            case "myEvent":
                this.notifications.send()
                this.logger.log("отправлено")
                break
        }
    }
}

let handler = new EventHandler()
let logger = new Log()
let notifications = new Notifications()

let m = new NotificationMediator(
    notifications,
    logger,
    handler
)

handler.setMediator(m)
handler.myEvent()