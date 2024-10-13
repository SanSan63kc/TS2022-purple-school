interface PaymentPersistent {
    id: number
    sum: number
    from: string
    to: string
}

type Payment = Omit<PaymentPersistent, "id">
type PaymentRequisits = Pick<PaymentPersistent, "from" | "id">

type ExtractExample = Extract<"from" | "to" | Payment, string>
type ExcludeExample = Exclude<"from" | "to" | Payment, string>