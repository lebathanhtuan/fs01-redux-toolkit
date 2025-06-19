import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import TaskItem from './components/TaskItem'

import './App.css'

function App() {
  const [taskList, setTaskList] = useState([])

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleAddTask = (e) => {
    e.preventDefault()
    const newTask = {
      id: uuidv4(),
      title: title,
      content: content,
    }
    const newTaskList = [...taskList, newTask]
    setTaskList(newTaskList)
    // Clear input fields after adding a task
    setTitle('')
    setContent('')
  }

  const handleEditTask = (id, title, content) => {
    const newTaskList = [...taskList]
    const index = newTaskList.findIndex((item) => item.id === id)
    const newTask = {
      id: id,
      title: title,
      content: content,
    }
    newTaskList.splice(index, 1, newTask)
    setTaskList(newTaskList)
  }

  const handleDeleteTask = (id) => {
    const newTaskList = taskList.filter((item) => item.id !== id)
    setTaskList(newTaskList)
  }

  const renderTaskList = () => {
    return taskList.map((item, index) => {
      return (
        <TaskItem
          key={item.id}
          id={item.id}
          title={item.title}
          content={item.content}
          index={index}
          handleEditTask={handleEditTask}
          handleDeleteTask={handleDeleteTask}
        />
      )
    })
  }

  return (
    <div className="container">
      <form className="form" onSubmit={(e) => handleAddTask(e)}>
        <h1>To Do List App</h1>
        <div>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Content</label>
          <input
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button className="button">Add task</button>
      </form>
      <div>{renderTaskList()}</div>
    </div>
  )
}

export default App
