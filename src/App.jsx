import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <form className="form">
        <h1>To Do List App</h1>
        <div>
          <label htmlFor="title">Title</label>
          <input id="title" />
        </div>
        <div>
          <label htmlFor="">Content</label>
          <input id="content" />
        </div>
        <button className="button">Add task</button>
      </form>
      <div>
        <div className="card">
          <h2>Task 1</h2>
          <p>Content of task 1</p>
          <div className="action-buttons">
            <button className="button">Edit</button>
            <button className="button">Delete</button>
          </div>
        </div>
        <div className="card">
          <div>
            <label htmlFor="title">Title</label>
            <input id="title" value="Task 2" />
          </div>
          <div>
            <label htmlFor="">Content</label>
            <input id="content" value="Content of task 2" />
          </div>
          <div className="action-buttons">
            <button className="button">Save</button>
            <button className="button">Cancel</button>
            <button className="button">Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
