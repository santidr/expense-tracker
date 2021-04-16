import { useContext } from "react"

import TransactionContext from "../context/TransactionContext"
import { numberWithCommas } from "../helpers/numberWithComas"

const Balance = () => {
    const { transactions } = useContext(TransactionContext)

    const amounts = transactions.map(item => item.amount)
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)

    return (
        <>
            <h4>Your Balance</h4>
            <h1 className="balance">${ numberWithCommas(total) }</h1>
        </>
    )
}

export default Balance
