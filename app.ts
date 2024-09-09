class Vehicle {
    public make: string
    private damages: string[]
    private _model: string
    protected run: number
    #price: number

    addDamate(damage: string){
        this.damages.push(damage)
    }

    set model(m: string){
        this._model = m
        //this.#price = 100
    }

    get model(){
        return this._model
    }

    isPriceEqual(v: Vehicle){
        return this.#price === v.#price
    }
}

class EuroTruck extends Vehicle{
    setRun(km: number){
        this.run = km/0.62
        
    }
}

new Vehicle().make = "d"