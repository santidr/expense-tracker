import Header from './components/Header'
import IncomeExpense from './components/IncomeExpense'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'
import GlobalState from './context/GlobalState'

import './App.css'

const App = () => {
    return (
        <GlobalState>
            <div className="container">
                <Header />
                <IncomeExpense />
                <TransactionList />
                <AddTransaction />
            </div>
        </GlobalState>
    )
}

export default App
