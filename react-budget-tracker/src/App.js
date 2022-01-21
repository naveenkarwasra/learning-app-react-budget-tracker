import React from "react"
import Details from "./component/details"
import Main from "./component/main.js"

const App = () => {
  return(
    <div className="detail-card">
      <div className="card">
        <Details title="Income"/>
      </div>
      <div className="card">
        <Main />
      </div>
      <div className="card">
        <Details title="Expense" />
      </div>
    
    </div>
  )
}

export default App