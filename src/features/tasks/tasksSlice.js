import { createSlice } from '@reduxjs/toolkit'

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: [{
        title: 'example1- Grocery Shopping',
        details: 'Take inventory of kitchen, plan meals, and order groceries on Instacart.',
        createdAt: new Date('05/01/2020').toDateString(),
        updatedAt: null,
        dueDate: new Date('11/01/2020').toDateString(),
        dateCompleted: null,
        notes: 'Don\'t forget Rhonda\'s juice!',
        category: 'household chores',
        priority: 'medium',
    }, 
    {
        title: 'example2- Weed the Garden',
        details: 'Weed container garden and front flower bed. Clip any dead areas of plants.',
        createdAt: new Date('05/01/2020').toDateString(),
        updatedAt: null,
        dueDate: new Date('10/22/2020').toDateString(),
        dateCompleted: null,
        notes: 'Look out for the Asian giant hornet!',
        category: 'yardwork',
        priority: 'high',
    }],
    reducers: {
        addTask: (state, action) => {
            const createdAt = new Date().toDateString()
            const newTask = {
                ...action.payload, 
                createdAt, 
                updatedAt: null,
                dateCompleted: null,
                }
            return [...state, newTask]
        }
    }
})

export const { addTask } = tasksSlice.actions

// thunk, in case I need it
export const addTaskAsync = task => dispatch => {
    setTimeout(() => {
        dispatch(addTask(task))
    }, 1000)
}

// selector
export const selectTasks = state => state.tasks

export default tasksSlice.reducer