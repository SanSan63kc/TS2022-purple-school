class Product {
    constructor(
        public id: number,
        public title: string,
        public price: number
    ) { }
}

class Delivery {
    constructor(
        public date: Date
    ) { }
}

class HomeDelivery extends Delivery {
    constructor(date: Date, public address: string) {
        super(date)
    }
}

class ShopDelivery extends Delivery {
    constructor(public shopId: number) {
        super(new Date())
    }
}

type DeliveryOptions = HomeDelivery | ShopDelivery

class Cart {
    private products: Product[] = []
    private delivery: DeliveryOptions

    public addProduct(product: Product): void {
        this.products.push(product)
    }

    public deleteProduct(productId: number): void {
        this.products = this.products.filter((p: Product) => p.id !== productId)
    }

    public getSum(): number {
        return this.products
            .map((p: Product) => p.price)
            .reduce((p1: number, p2: number) => p1 + p2)
    }

    public setDelivery(delivery: DeliveryOptions): void {
        this.delivery = delivery
    }

    public checkOut(){
        if (this.products.length==0){
            throw new Error("нет ни одного товара в корзине")
        }
        if (!this.delivery){
            throw new Error("не указан способ доставки")
        }
        return {success: true}
    }
}

let cart = new Cart()
cart.addProduct(new Product(1, "Батончики", 10))
cart.addProduct(new Product(2, "Витаминки", 20))
cart.addProduct(new Product(3, "Минералка", 15))
cart.deleteProduct(1)
cart.setDelivery(new HomeDelivery(new Date(), "myAddress"))
console.log(cart.getSum())
console.log(cart.checkOut())