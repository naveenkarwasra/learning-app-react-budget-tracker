import React, { useContext } from "react";
import { ExpenseTrackerContext } from "../context/context";

const List = () => {
    const {deleteTransaction, transactions} = useContext(ExpenseTrackerContext)
    console.log(transactions)
    
    return (
        <div className="list-container">
            {transactions.map((transaction) =>(
                <ul className="list" key = {transaction.id}>
                    <li className = {transaction.type === "income" ? "list-icon-income" : "list-icon-expense"}>
                        Icon
                    </li>
                    <li>
                        {transaction.category}
                        {` ${transaction.amount} - ${transaction.date}`}
                    </li>
                    <li aria-label="delete" onClick="">
                        Delete
                    </li>

                </ul>
            ))}
        </div>
        
    )
}

export default List