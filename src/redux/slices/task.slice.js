import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

export const taskSlice = createSlice({
  name: 'task',
  initialState: {
    taskList: JSON.parse(localStorage.getItem('taskList')) || [],
  },
  reducers: {
    createTask: (state, action) => {
      const { title, content } = action.payload
      const newTask = {
        id: uuidv4(),
        title: title,
        content: content,
      }
      state.taskList.unshift(newTask)
      localStorage.setItem('taskList', JSON.stringify(state.taskList))
    },
    updateTask: (state, action) => {
      const { id, title, content } = action.payload
      const taskIndex = state.taskList.findIndex((task) => task.id === id)
      if (taskIndex !== -1) {
        state.taskList.splice(taskIndex, 1, {
          id: id,
          title: title,
          content: content,
        })
        localStorage.setItem('taskList', JSON.stringify(state.taskList))
      }
    },
    deleteTask: (state, action) => {
      const { id } = action.payload
      state.taskList = state.taskList.filter((task) => task.id !== id)
      localStorage.setItem('taskList', JSON.stringify(state.taskList))
    },
  },
})

// Action creators are generated for each case reducer function
export const { createTask, updateTask, deleteTask } = taskSlice.actions

export default taskSlice.reducer
