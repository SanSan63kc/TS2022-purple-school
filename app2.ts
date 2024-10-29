interface IInsurance {
    id: number;
    status: string;
    setVehicle(vehicle: any): void;
    submit(): Promise<boolean>
}

class TFInsurance implements IInsurance {
    id: number;
    status: string;
    private vehicle: any;
    setVehicle(vehicle: any): void {
        this.vehicle = vehicle
    }

    async submit(): Promise<boolean> {
        let res = await fetch("",
            {
                method: "POST", body: JSON.stringify({ vehicle: this.vehicle })
            })
            let data = await res.json()
            return data.isSuccess
    }
}

class ABInsurance implements IInsurance {
    id: number;
    status: string;
    private vehicle: any;
    setVehicle(vehicle: any): void {
        this.vehicle = vehicle
    }

    async submit(): Promise<boolean> {
        let res = await fetch("ab",
            {
                method: "POST", body: JSON.stringify({ vehicle: this.vehicle })
            })
            let data = await res.json()
            return data.yes
    }
}

abstract class InsuranceFactory{
    db: any
    abstract createInsurance(): IInsurance

    saveHistory(ins: IInsurance){
        this.db.save(ins.id, ins.status)
    }
}

class TFInsuranceFactory extends InsuranceFactory {
    createInsurance(): TFInsurance{
        return new TFInsurance()
    }
}

class ABInsuranceFactory extends InsuranceFactory {
    createInsurance(): ABInsurance{
        return new ABInsurance()
    }
}

let tfInsuranceFactory = new TFInsuranceFactory()
let ins = tfInsuranceFactory.createInsurance()
tfInsuranceFactory.saveHistory(ins)





let INSURANCE_TYPE = {
    tf: TFInsurance,
    ab: ABInsurance
}

type IT = typeof INSURANCE_TYPE

class InsuranceFactoryAlt{
    db: any

    createInsurance<T extends keyof IT>(type: T): IT[T]{
        return INSURANCE_TYPE[type]
    }

    saveHistory(ins: IInsurance){
        this.db.save(ins.id, ins.status)
    }
}

let insuranceFactoryAlt = new InsuranceFactoryAlt()
let ins2 = new (insuranceFactoryAlt.createInsurance("tf"))
insuranceFactoryAlt.saveHistory(ins2)