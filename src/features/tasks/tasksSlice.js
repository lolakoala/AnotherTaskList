import { createSlice } from '@reduxjs/toolkit'

const sandboxState = [{
        title: 'example1- Grocery Shopping',
        details: 'Take inventory of kitchen, plan meals, and order groceries on Instacart.',
        createdAt: new Date('05/01/2020').toDateString(),
        updatedAt: null,
        dueDate: new Date('11/01/2020').toDateString(),
        dateCompleted: null,
        notes: 'Don\'t forget Rhonda\'s juice!',
        category: 'household chores',
        priority: 'medium',
        example: true,
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
        example: true,
}]

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: [...sandboxState],
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
        },
        toggleSandbox: (state) => {
            if (state.find(task => task.example)){
                return state.filter(task => !task.example)
            } else {
                return [...sandboxState, ...state]
            }
        }
    }
})

export const { addTask, toggleSandbox } = tasksSlice.actions

// thunk, in case I need it
export const addTaskAsync = task => dispatch => {
    setTimeout(() => {
        dispatch(addTask(task))
    }, 1000)
}

// selector
export const selectTasks = state => state.tasks

export default tasksSlice.reducer