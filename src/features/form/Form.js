import React, { useState } from 'react'
import { addTask, addTaskAsync } from '../tasks/tasksSlice'
import { useDispatch } from 'react-redux'

const Form = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const [notes, setNotes] = useState('')
    const [category, setCategory] = useState('')
    const [dueDate, setDuedate] = useState(null) 

    return (<form>
        <input
            type="text"
            value={title}
            onChange={event => setTitle(event.target.value)}
            placeholder="Enter Task Title"
            required
        />
        {/* if there are categories in redux, populate dropdown */}
        {/* and render instructions to select one or submit new */}
        <input
            type="category"
            value={category}
            onChange={event => setCategory(event.target.value)}
            placeholder="Enter Category"
        />
        <textarea
            type="text"
            value={details}
            onChange={event => setDetails(event.target.value)}
            placeholder="Enter Task Details"
        />
        {/* date due- date picker */}
        <textarea
            type="text"
            value={notes}
            onChange={event => setNotes(event.target.value)}
            placeholder="Enter Task Notes"
        />
        <button
            onClick={() => dispatch(addTask({
                title, 
                details,
                category,
                dueDate,
            }))}>Submit New Task</button>
        <button
            onClick={() => {
                setTitle('')
                setDetails('')
                setNotes('')
                setCategory('')
                setDuedate(null)
            }}>Clear Task Form</button>
    </form>)
}

export default Form