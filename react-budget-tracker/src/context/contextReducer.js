const contextReducer = (state, action) => {
    let transactions;
    switch (action.type) {
        case "deleteTransaction":
            transactions = state.filter((transaction) => transaction.id !== action.payload)
            return transactions;
        case "addTransaction":
            transactions = [action.payload, ...state]
    
        default:
            return state;
    }

}

export default contextReducer