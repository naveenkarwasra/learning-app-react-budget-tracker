import React, { useContext } from "react"
import { ExpenseTrackerContext } from "../context/context"
import "./detail.css"
import Form from "./form.js"
import List from "./list.js"


const Main = () => {
    const {balance} = useContext(ExpenseTrackerContext)
    return (
        <div className="main">
            <h3>Expense Tracker</h3>
            <h4>Powered By Speechly</h4>
            <h4 className="main-card-total">Total Balance: ${balance}</h4>
            <hr></hr>
            <Form />
            <List />



        </div>
    )
}

export default Main