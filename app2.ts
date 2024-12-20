class User {
    constructor(public userId: number) { }
}

class CommandHistory {
    public commands: Command[] = []
    push(command: Command) {
        this.commands.push(command)
    }
    remove(command: Command) {
        this.commands = this.commands.filter(c => c.commandId != command.commandId)
    }
}

abstract class Command {
    public commandId: number
    abstract execute(): void
    constructor(public history: CommandHistory) {
        this.commandId = Math.random()
    }
}

class AddUserCommand extends Command {
    constructor(
        private user: User,
        private receiver: UserService,
        history: CommandHistory
    ) {
        super(history)
    }

    execute(): void {
        this.receiver.saveUser(this.user)
        this.history.push(this)
    }

    undo(){
        this.receiver.deleteUser(this.user.userId)
        this.history.remove(this)
    }
}

class UserService {
    saveUser(user: User) {
        console.log(`Сохраняю пользователя с id ${user.userId}`)
    }

    deleteUser(userId: number) {
        console.log(`Удаляем пользователя с id ${userId}`)
    }
}

class Controller {

    receiver: UserService
    history: CommandHistory = new CommandHistory()

    addreceiver(receiver: UserService){
        this.receiver = receiver
    }

    run() {
        let addUserCommand = new AddUserCommand(
            new User(1),
            this.receiver,
            this.history
        )
        addUserCommand.execute()
        console.log(addUserCommand.history)
        addUserCommand.undo()
        console.log(addUserCommand.history)
    }
}

let controller = new Controller()
controller.addreceiver(new UserService())
controller.run()