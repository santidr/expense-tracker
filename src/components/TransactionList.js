import { useContext } from "react"
import TransactionContext from "../context/TransactionContext"
import ListItem from "./ListItem"
import NoTransactionAlert from "./NoTransactionAlert"

const TransactionList = () => {

    const { transactions } = useContext(TransactionContext)

    return (
        <div className="transation-list">
            <h3>History</h3>
            <hr />

            { (transactions.length > 0) ?
                (
                    <ul>
                        { transactions.map(item => (
                            <ListItem key={item.id} item={item} />
                        ))}
                    </ul>
                ) : <NoTransactionAlert />
            }
        </div>
    )
}

export default TransactionList
