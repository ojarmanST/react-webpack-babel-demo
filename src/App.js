import React from "react"
import Form from "./Form";
function App() {
    return (<div>
        <h2>Welcome to React App</h2>
        <h3>Date : {new Date().toDateString()}</h3>
        <Form/>
    </div>)
}

export default App;