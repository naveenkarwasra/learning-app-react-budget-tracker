import React from "react"
import { Doughnut } from "react-chartjs-2"
import "./detail.css"

const Details = ({title}) => {
    return (
        <div className={title === "Income" ? "income" : "expense"}>
            <header title= {title}></header>
            <div>
                <h5>$50</h5>
                
            </div>
        </div>
    )
}

export default Details