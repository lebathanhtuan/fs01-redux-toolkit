import { configureStore } from '@reduxjs/toolkit'
import taskReducer from './redux/slices/task.slice'
import productReducer from './redux/slices/product.slice'

export default configureStore({
  reducer: {
    task: taskReducer,
    product: productReducer,
  },
})
