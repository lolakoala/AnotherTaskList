import { createSlice } from '@reduxjs/toolkit'

export const sortSlice = createSlice({
    name: 'sort',
    initialState: 'incomplete',
    reducers: {
        setSort: (state, action) => {
            return action.payload
        }
    }
})

export const {setSort} = sortSlice.actions

export const selectSort = state => state.sort

export default sortSlice.reducer
