import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from '../features/tasks/tasksSlice'
import sortReducer from '../features/tasks/sortSlice'
import categoriesReducer from '../features/tasks/categoriesSlice'

export default configureStore({
  reducer: {
    tasks: tasksReducer,
    categories: categoriesReducer,
    sort: sortReducer,
  },
})
