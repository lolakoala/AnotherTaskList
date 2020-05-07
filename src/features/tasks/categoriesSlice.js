import { createSlice } from '@reduxjs/toolkit'

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        1: 'household chores',
        2: 'yardwork',
    },
    reducers: {
        addCategory: (state, action) => {
            const name = action.payload
            const catNames = Object.values(state).map(cat => cat.toLowerCase)
            if (catNames.includes(name.toLowerCase())) {
                return state
            } else {
                // console.log(Math.max(...Object.keys(state).map(str => parseInt(str, 10))))
                const id = Math.max(...Object.keys(state).map(str => parseInt(str, 10))) + 1
                return {...state, [id]: name} 
            }
        }
    }
}) 

export const { addCategory } = categoriesSlice.actions

// thunk, in case I need it
export const addCategoryAsync = cat => dispatch => {
    setTimeout(() => {
        dispatch(addCategory(cat))
    }, 1000)
}

// selectors
export const selectCategories = state => Object.values(state.categories)
export const selectCatObjects = state => state.categories

export default categoriesSlice.reducer