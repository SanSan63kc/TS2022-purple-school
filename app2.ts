interface IProvider {
    sendMessage(message: string): void
    connect(config: string): void
    disconnect(): void
}

class TelegramProvider implements IProvider{
    sendMessage(message: string): void {
        console.log(message)
    }

    connect(config: string): void{
        console.log(config)
    }

    disconnect(): void{
        console.log("disconnect TG")
    }
}

class WhatsUpProvider implements IProvider{
    sendMessage(message: string): void {
        console.log(message)
    }

    connect<T>(config: string): void{
        console.log(config)
    }

    disconnect(): void{
        console.log("disconnect WhatsUp")
    }
}

class NotoficationsSender{
    constructor(private provider: IProvider){}

    send(){
        this.provider.connect("connect")
        this.provider.sendMessage("message")
        this.provider.disconnect()
    }
}

class DelayNotificationSender extends NotoficationsSender{
    constructor(provider: IProvider){
        super(provider)
    }
    sendDelayed(){
    }
}

let sender = new  NotoficationsSender(new TelegramProvider)
sender.send()

let sender2 = new  NotoficationsSender(new WhatsUpProvider)
sender2.send()