import React, { useState } from 'react'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { addTask } from '../tasks/tasksSlice'
import { useDispatch } from 'react-redux'

const Form = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const [notes, setNotes] = useState('')
    const [category, setCategory] = useState('')
    const [dueDate, setDueDate] = useState(new Date()) 
    const clearForm = () => {
        setTitle('')
        setDetails('')
        setNotes('')
        setCategory('')
        setDueDate(new Date())
    }

    return (<div>
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
            // conditional require
        />
        <textarea
            type="text"
            value={details}
            onChange={event => setDetails(event.target.value)}
            placeholder="Enter Task Details"
        />
        {/* needs label */}
        <DatePicker
            selected={dueDate} 
            onChange={date => setDueDate(date)}
        />
        <textarea
            type="text"
            value={notes}
            onChange={event => setNotes(event.target.value)}
            placeholder="Enter Task Notes"
        />
        <button
            onClick={() => {
                dispatch(addTask({
                title, 
                details,
                category,
                dueDate: dueDate.toISOString(),}))
                clearForm()

            }}>Submit New Task</button>
        <button onClick={clearForm}>Clear Task Form</button>
    </div>)
}

export default Form