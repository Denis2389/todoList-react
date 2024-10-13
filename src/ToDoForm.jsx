import { useState } from "react"

const ToDoForm = () => {
    const handleSubmit = () => {

    }

    const handleChange = () => {
        
    }
    useState [userInput, setUserInput] = useState('')
    return (
        <form onSubmit={handleSubmit}>
            <input value={userInput} onChange={handleSubmit} type="text" />
        </form>
    )
}

export default ToDoForm