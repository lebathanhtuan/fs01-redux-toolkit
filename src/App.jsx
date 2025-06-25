import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import TaskItem from './components/TaskItem'

import { createTask, updateTask, deleteTask } from './redux/slices/task.slice'

import './App.css'

function App() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const dispatch = useDispatch()

  const { taskList } = useSelector((state) => state.task)

  const handleAddTask = (e) => {
    e.preventDefault()
    dispatch(
      createTask({
        title: title,
        content: content,
      })
    )
    // Clear input fields after adding a task
    setTitle('')
    setContent('')
  }

  const handleEditTask = (id, title, content) => {
    dispatch(
      updateTask({
        id: id,
        title: title,
        content: content,
      })
    )
  }

  const handleDeleteTask = (id) => {
    dispatch(deleteTask({ id: id }))
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
