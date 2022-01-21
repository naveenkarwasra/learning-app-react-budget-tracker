import React from "react"


const Form = () => {
    return(
        <div className="content form">
            
            <form className="form-input">
                      
            <select className="form-select">
                <option value="" hidden>Type</option>
                <option value="Income">Income</option>
                <option value="Expense">Expense</option>
            </select>
            
            
            
            <select className="form-select">
                <option value="" hidden>Category</option>
                <option value="Business">Business</option>
                <option value="Salary">Salary</option>
            </select>
            
            </form>
            
            
            <div className="form-input">
                <input type="number" label="Amount" placeholder="Amount" className="form-select" />
                <input type="text" onfocus="(this.type='date')" placeholder="Date" className="form-select"/>
            </div>
            <div>
                <button className="btn">Create</button>
            </div>
        </div>
    )
}

export default Form