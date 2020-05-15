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
        id: 1,
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
        id: 2,
}]

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: [...sandboxState],
    reducers: {
        addTask: (state, action) => {
            const createdAt = new Date().toDateString()
            const ids = [...sandboxState, ...state].map(task => parseInt(task.id, 10))
            const id = Math.max(...ids) + 1
            const newTask = {
                ...action.payload, 
                createdAt,
                id, 
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
        },
        markComplete: (state, action) => {
            const updatedAt = new Date().toDateString()
            const dateCompleted = new Date().toDateString()
            const taskToUpdate = state.find(task => task.id === action.payload)
            const updatedTask = {...taskToUpdate, dateCompleted, updatedAt}
            const filteredTasks = state.filter(task => task.id !== action.payload)
            console.log(filteredTasks, state, action.payload)
            return [...filteredTasks, updatedTask]
        },
        removeTask: (state, action) => {
            const filteredTasks = state.filter(task => task.id !== action.payload)
            return [...filteredTasks]
        }, 
        editTask: (state, action) => {
            const updatedAt = new Date().toDateString()
            const taskToEdit = state.find(task => task.id === action.payload.id)
            const editedTask = {...taskToEdit, ...action.payload, updatedAt}
            const filteredTasks = state.filter(task => task.id !== action.payload.id)
            return [...filteredTasks, editedTask]
        },
    }
})

export const { addTask, toggleSandbox, markComplete, removeTask, editTask } = tasksSlice.actions

// thunk, in case I need it
export const addTaskAsync = task => dispatch => {
    setTimeout(() => {
        dispatch(addTask(task))
    }, 1000)
}

// selector
export const selectTasks = (state) => {
    const {sort, tasks} = state
    if (sort === 'incomplete') {
        return [...tasks.filter(task => !task.dateCompleted), ...tasks.filter(task => task.dateCompleted)]
    } else if (Object.keys(sandboxState[0]).includes(sort)) {
        const sortedTasks = tasks.slice().sort((left, right) => {
            if (left[sort] < right[sort]) {
                return -1
            } 
            if (left[sort] > right[sort]) {
                return 1
            } 
            return 0
        })
        return sortedTasks
    } else {
        return tasks
    }
}

export default tasksSlice.reducer