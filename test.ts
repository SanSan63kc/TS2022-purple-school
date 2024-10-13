interface IForm {
    name: string;
    password: string
}

let form: IForm = {
    name: "SanSan",
    password: "123"
}

let formValidation: Validation<IForm> = {
    name: { isValid: true },
    password: { isValid: false, errorMessage: "Должен быть длиннее 5 символов" }
}

type Validation<T> = {
    [K in keyof T]: {
        isValid: true
    } | {
        isValid: false
        errorMessage: string
    }
}