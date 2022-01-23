import React from "react"
import "./detail.css"
import Form from "./form.js"
import List from "./list.js"


const Main = () => {
    return (
        <div className="content main">
            <h3>Expense Tracker</h3>
            <h4>Powered By Speechly</h4>
            <h5>Total Balance $100</h5>
            <hr></hr>
            <Form />
            <List />



        </div>
    )
}

export default Main