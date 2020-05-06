import { createSlice } from '@reduxjs/toolkit'

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: [{
        title: 'example1- Grocery Shopping',
        details: 'Take inventory of kitchen, plan meals, and order groceries on Instacart.',
        createdAt: new Date('05/01/2020'),
        updatedAt: null,
        completed: false,
        dueDate: new Date('11/01/2020'),
        dateCompleted: null,
        notes: 'Don\'t forget Rhonda\'s juice!',
        // category: Category['id'],
    }, {
            title: 'example2- Weed the Garden',
            details: 'Weed container garden and front flower bed. Clip any dead areas of plants.',
            createdAt: new Date('05/01/2020'),
            updatedAt: null,
            completed: false,
            dueDate: new Date('10/22/2020'),
            dateCompleted: null,
            notes: 'Look out for the Asian giant hornet!',
            // category: Category['id'],
        }],
    reducers: {
        addTask: (state, action) => {
            state = [...state, action.payload]
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

export default tasksSlice.reducer