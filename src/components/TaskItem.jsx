import { useState } from 'react'

function TaskItem({ id, title, content, handleDeleteTask, handleEditTask }) {
  const [isEdit, setIsEdit] = useState(false)
  const [taskTitle, setTaskTitle] = useState(title)
  const [taskContent, setTaskContent] = useState(content)

  const renderCardContent = () => {
    if (isEdit) {
      return (
        <>
          <div>
            <label htmlFor="title">Title</label>
            <input
              id="title"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">Content</label>
            <input
              id="content"
              value={taskContent}
              onChange={(e) => setTaskContent(e.target.value)}
            />
          </div>
        </>
      )
    } else {
      return (
        <>
          <h2>{title}</h2>
          <p>{content}</p>
        </>
      )
    }
  }

  const renderEditActions = () => {
    if (isEdit) {
      return (
        <>
          <button
            className="button"
            onClick={() => {
              handleEditTask(id, taskTitle, taskContent)
              setIsEdit(false)
            }}
          >
            Save
          </button>
          <button className="button" onClick={() => setIsEdit(false)}>
            Cancel
          </button>
        </>
      )
    } else {
      return (
        <button className="button" onClick={() => setIsEdit(true)}>
          Edit
        </button>
      )
    }
  }

  return (
    <div className="card">
      {renderCardContent()}
      <div className="action-buttons">
        {renderEditActions()}
        <button className="button" onClick={() => handleDeleteTask(id)}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default TaskItem
