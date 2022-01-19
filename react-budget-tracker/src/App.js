import React from "react"
import Details from "./component/details"

const App = () => {
  return(
    <div className="detail-card">
      <div className="card">
        <Details title="Income"/>
      </div>
      <div className="card">
        <Details />
      </div>
      <div className="card">
        <Details title="Expense" />
      </div>
    
    </div>
  )
}

export default App