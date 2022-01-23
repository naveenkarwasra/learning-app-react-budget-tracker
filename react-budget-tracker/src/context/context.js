import React, {useReducer, createContext} from "react"
import contextReducer from "./contextReducer"

const initialState = [{ amount: 500, category: 'Salary', type: 'Income', date: '2020-11-16', id: '44c68123-5b86-4cc8-b915-bb9e16cebe6a' }]

export const ExpenseTrackerContext = createContext(initialState)
export const Provider = ({children}) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState)
    const deleteTransaction = (id) => dispatch({type: "deleteTransaction", payload: id})
    const addTransaction = (transaction) => dispatch({type: "addTransaction", payload: transaction})
    console.log(transactions)
    
    return (
        <ExpenseTrackerContext.Provider value={{deleteTransaction, addTransaction,
        transactions
        }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}