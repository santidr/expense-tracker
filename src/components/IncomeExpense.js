import { useContext } from "react"
import TransactionContext from "../context/TransactionContext"
import { numberWithCommas } from "../helpers/numberWithComas"

const IncomeExpense = () => {
    const { transactions } = useContext(TransactionContext)

    const amounts = transactions.map(item => item.amount)

    const income = amounts.filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0).toFixed(2)

    const expense = (amounts.filter(item => item < 0)
        .reduce((acc, item) => (acc += item), 0).toFixed(2)) * 1


    return (
        <div className="inc-exp-container">
            <div className="income">
                <h4>Income</h4>
                <p className="plus">${ numberWithCommas(income) }</p>
            </div>
            <div className="expense">
                <h4>Expense</h4>
                <p className="minus">-${ numberWithCommas(Math.abs(expense)) }</p>
            </div>
        </div>
    )
}

export default IncomeExpense