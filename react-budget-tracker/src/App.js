import React from "react"
import Details from "./component/details"
import Main from "./component/main.js"

const App = () => {
  return(
    <div className="detail-card">
      <div className="card data-display-card">
        <Details title="Income"/>
      </div>
      <div className="card form-display-card">
        <Main />
      </div>
      <div className="card data-display-card">
        <Details title="Expense" />
      </div>
    
    </div>
  )
}

export default App