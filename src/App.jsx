import { useState } from "react"
import ToDoForm from "./ToDoForm"
import ToDo from './ToDo'

function App() {
    const [todos, setTodos] = useState([]);

    const addTask = () => {

    }

    const removeTask = () => {


    }


    const handleToggle = () => {

    }

    return (
        <div className='wrapper'>
            <header>
                <h1>Список задач {todos.length}</h1>
            </header>
            <ToDoForm addTask/>
            {todos.map(() => {
                return <ToDo key={todos.id} />;
            })}
            <ToDo 
            todo={todo}
            key={todo.id}
            toogleTask={handleToggle}
            removeTask={removeTask}
            />
        </div>
    )
}

export default App
