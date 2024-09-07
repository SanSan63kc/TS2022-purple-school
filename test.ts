interface IPayment {
    sum: number,
    number: number,
    to: number
}

enum PaymentStatus {
    Success = "success",
    Failed = "failed"
}

interface IPaymentsRequest extends IPayment {

}

interface IDataSuccess extends IPayment {
    databaseId: number,
}

interface IDataFailed {
    errorMessage: string,
    errorCode: number
}

interface IResponseSuccess {
    status: PaymentStatus.Success,
    data: IDataSuccess
}

interface IResponseFailed {
    status: PaymentStatus.Failed,
    data: IDataFailed
}

type f = (res: Res) => number

type Res = IResponseFailed | IResponseSuccess

function isSuccess(res: Res): res is IResponseSuccess {
    if (res.status === PaymentStatus.Success) {
        return true
    } return false
}


function getIdFromData(res: Res): number {
    if (isSuccess(res)) {
        return res.data.databaseId
    } else {
        throw new Error(res.data.errorMessage)
    }
}