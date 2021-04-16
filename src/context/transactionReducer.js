import types from "./types";

const transactionReducer = (state, action) => {
    switch (action.type) {
        case types.addNew:
            return {
                ...state,
                transactions: [ action.payload, ...state.transactions ]
            }
        case types.delete:
            return {
                ...state,
                transactions: state.transactions.filter(item => item.id !== action.payload)
            }
    
        default:
            return state
    }
}

export default transactionReducer