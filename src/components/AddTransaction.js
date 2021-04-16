import { useContext, useState } from "react"
import TransactionContext from "../context/TransactionContext"

const initialState = { text: '', amount: '' }

const AddTransaction = () => {
    const [ formValues, setFormValues ] = useState(initialState)

    const [ formErrors, setFormErrors ] = useState({})

    const { text, amount } = formValues
    const { textError, amountError } = formErrors

    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [ target.name ]: target.value
        })

        if ( [ target.value ].length > 0) {
            setFormErrors({})
        }
    }

    const { addNew } = useContext(TransactionContext)

    const resetForm = () => {
        setFormValues(initialState)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (text.trim().length < 2) {
            return setFormErrors({
                ...formErrors,
                textError: 'this text field is required.'
            })
        } 
        if (amount.trim().length === 0) {
            return setFormErrors({
                ...formErrors,
                amountError: 'this amount field is required.'
            })
        }

        const newTransaction = {
            id: new Date().getTime(),
            text,
            amount: parseInt(amount)
        }

        addNew(newTransaction)
        resetForm()
    }

    return (
        <div>
            <h3>Add new transaction</h3>
            <hr/>
            <form onSubmit={ handleSubmit }>
                <div className="form-control">
                    <label htmlFor="text"><b>Text</b></label>
                    <input 
                        type="text"
                        name="text"
                        placeholder="Enter text..."
                        value={ text }
                        onChange={ handleInputChange }
                        autoComplete="off"
                    />
                    <span className="input-error">{ textError }</span>
                </div>

                <div className="form-control">
                    <label htmlFor="amount">
                        <b>Amount</b><br/>
                        (type a negative amount for expenses. ex: -50)
                    </label>
                    <input 
                        type="number"
                        name="amount"
                        placeholder="Enter amount..."
                        value={ amount }
                        onChange={ handleInputChange }
                        autoComplete="off"
                    />
                    <span className="input-error">{ amountError }</span>
                </div>

                <div className="form-control">
                    <button type="submit">Add transaction</button>
                </div>
            </form>
        </div>
    )
}

export default AddTransaction
