import { useEffect, useReducer } from "react"

import TransactionContext from "./TransactionContext"
import transactionReducer from "./transactionReducer"
import types from "./types"

const initialState = {
    transactions: JSON.parse(localStorage.getItem('transactions')) || []
}

const GlobalState = (props) => {

    const [state, dispatch] = useReducer(transactionReducer, initialState)
    const { transactions } = state

    useEffect(() => {
        localStorage.setItem('transactions', JSON.stringify(transactions))
    }, [ transactions ])

    const addNew = (transaction) => {
        dispatch({ type: types.addNew, payload: transaction })
    }

    const deleteTransaction = (id) => {
        dispatch({ type: types.delete, payload: id })
    }

    return (
        <TransactionContext.Provider value={ { addNew, transactions, deleteTransaction } }>
            { props.children }
        </TransactionContext.Provider>
    )
}

export default GlobalState
