import React, { useState } from 'react'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { addTask } from '../tasks/tasksSlice'
import { selectCategories, addCategory } from '../tasks/categoriesSlice'
import { useDispatch, useSelector } from 'react-redux'

const Form = () => {
    const dispatch = useDispatch()
    const categories = useSelector(selectCategories)
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const [notes, setNotes] = useState('')
    const [category, setCategory] = useState('')
    const [newCat, setNewCat] = useState('') 
    const [dueDate, setDueDate] = useState(new Date())
    const [priority, setPriority] = useState('medium') 
    const clearForm = () => {
        setTitle('')
        setDetails('')
        setNotes('')
        setCategory('')
        setDueDate(new Date())
        setNewCat('')
        setPriority('medium')
    }
    const addNewCat = () => {
        dispatch(addCategory(newCat))
        setCategory(newCat)
        setNewCat('')
    }
    const handleRadio = event => {
        setPriority(event.target.value)
    }

    return (<div className='form'>
        <input
            type="text"
            value={title}
            onChange={event => setTitle(event.target.value)}
            placeholder="Enter Task Title"
            required
        />
        {categories.length &&
            <div>
                <label for="cat-select">Choose a Category:</label>
                <select 
                    name="categories" 
                    id="cat-select"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                >
                    {categories.map(cat => <option value={cat}>{cat}</option>)}
                </select>
            </div>
        }
        <input
            type="category"
            value={newCat}
            onChange={event => setNewCat(event.target.value)}
            placeholder="Enter a New Category"
            required={!categories.length}
        />
        <button onClick={addNewCat}>Add New Category</button>
        <p>Select a Priority Level:</p>
        <ul>
            <li>
                <label>
                    <input
                        type="radio"
                        value="low"
                        checked={priority === "low"}
                        onChange={handleRadio}
                    />
                    Low
                </label>
            </li>
            <li>
                <label>
                    <input
                        type="radio"
                        value="medium"
                        checked={priority === "medium"}
                        onChange={handleRadio}
                    />
                    Medium
                </label>
            </li>
            <li>
                <label>
                    <input
                        type="radio"
                        value="high"
                        checked={priority === "high"}
                        onChange={handleRadio}
                    />
                    High
                </label>
            </li>
        </ul>
        <textarea
            type="text"
            value={details}
            onChange={event => setDetails(event.target.value)}
            placeholder="Enter Task Details"
        />
        <label for="due-date-picker">Choose a Due Date:</label>
        <DatePicker
            id="due-date-picker"
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
                priority,
                dueDate: dueDate.toISOString(),}))
                clearForm()

            }}>Submit New Task</button>
        <button onClick={clearForm}>Clear Task Form</button>
    </div>)
}

export default Form