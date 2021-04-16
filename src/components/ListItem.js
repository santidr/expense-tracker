import React, { useContext } from 'react'
import TransactionContext from '../context/TransactionContext'

const ListItem = ({ item }) => {
    const { id, text, amount } = item

    const { deleteTransaction } = useContext(TransactionContext)

    const sign = (amount < 0) ? '-$' : '$'

    const handleDeleteItem = () => {
        deleteTransaction(id)
    }

    return (
        <li className={ (amount < 0) ? 'expense' : 'income' }>
            <span className="text">
                <i
                    onClick={ handleDeleteItem }
                    className="fas fa-times"
                ></i>
                { text }
            </span>
            <span className="amount">{ sign }{ Math.abs(amount) }</span>
        </li>
    )
}

export default ListItem
