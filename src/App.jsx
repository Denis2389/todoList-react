import { useState } from "react"

const App = () => {
  
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask.trim()])
      setNewTask('')
    }
  }

  return (
    <div>
      <input onChange={(e) => setNewTask(e.target.value)} type="text" value={newTask}/>
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
