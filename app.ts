function Uni(name: string): any {
    console.log(`инициализация: ${name}`)
    return function () {
        console.log(`вызов: ${name}`)
    }
}

@Uni("Класс")
class MyClass {
    @Uni("Свойство")
    props?: any

    @Uni("Свойство static")
    static prop2?: any

    @Uni("Метод")
    method(@Uni("Параметр метода") _: any){}

    @Uni("Метод static")
    static method2(@Uni("Параметр метода static") _: any){}

    constructor(@Uni("Параметр конструктора") _: any) {

    }
}