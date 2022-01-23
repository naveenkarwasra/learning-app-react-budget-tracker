import React, {useState, useContext} from "react"
import { ExpenseTrackerContext } from "../context/context"
import {v4 as uuidv4} from "uuid"

const initialState = {
    amount: "",
    category: "",
    type: "",
    date: new Date()

}


const Form = () => {
    const {addTransaction, transactions} = useContext(ExpenseTrackerContext)
    const [formData, setFormData] = useState(initialState)
    
    

    const createTransaction = () => {
        
       
        
        addTransaction({...formData, amount: Number(formData.amount), id: uuidv4()})
        setFormData(initialState) 
        console.log({...formData, amount: Number(formData.amount), id: uuidv4()})

              
    }

    
    return(
        <div className="content form">
            
            <form className="form-input">
                      
            <select className="form-select" value={formData.type} onChange={(e) => setFormData({...formData, type: e.target.value})}>
                <option value="" hidden>Type</option>
                <option value="Income">Income</option>
                <option value="Expense">Expense</option>
            </select>
            
            
            
            <select className="form-select" value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})}>
                <option value="" hidden>Category</option>
                <option value="Business">Business</option>
                <option value="Salary">Salary</option>
            </select>
            
            </form>
            
            
            <div className="form-input">
                <input type="number" label="Amount" placeholder="Amount" className="form-select" value={formData.amount} onChange={(e) => setFormData({...formData, amount: e.target.value})}/>
                <input type="date" placeholder="Date" className="form-select" />
            </div>
            <div>
                <button onClick= {createTransaction} >Create</button>
            </div>
        </div>
    )
}


export default Form