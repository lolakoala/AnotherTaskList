import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { selectTasks, markComplete, removeTask, editTask } from './tasksSlice'
import { selectCategories } from './categoriesSlice'
import pencil from '../../assets/pencil.svg'

const Card = ({task, categories}) => {
    const {
        title,
        details,
        createdAt,
        updatedAt,
        dueDate,
        dateCompleted,
        notes,
        category,
        priority,
        id
    } = task
    const dispatch = useDispatch()
    const [expanded, setExpanded] = useState(false)
    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(title)
    const [newDetails, setNewDetails] = useState(details)
    const [newDueDate, setNewDueDate] = useState(dueDate)
    const [newNotes, setNewNotes] = useState(notes)
    const [newCategory, setNewCategory] = useState(category)
    const [newPriority, setNewPriority] = useState(priority)

    const complete = () => {
        dispatch(markComplete(id))
    }
    const submitEdit = event => {
        dispatch(editTask({
            id,
            title: newTitle,
            details: newDetails, 
            dueDate: typeof newDueDate === 'object' ? newDueDate.toDateString() : newDueDate,
            notes: newNotes,
            category: newCategory,
            priority: newPriority,
        }))
        setEditing(false)
    }
    const remove = () => {
        dispatch(removeTask(id))
    }
    const editTitle = event => {
        setNewTitle(event.target.value)
    }
    const editDetails = event => {
        setNewDetails(event.target.value)
    }
    const editNotes = event => {
        setNewNotes(event.target.value)
    }
    const editCategory = event => {
        setNewCategory(event.target.value)
        submitEdit()
    }
    const editPriority = event => {
        setNewPriority(event.target.value)
        submitEdit()
    }
    const displayDate = typeof newDueDate === 'object' ? newDueDate.toDateString() : newDueDate 

    const taskTitle = <div className='mini-task'>
        <p onClick={() => setExpanded(!expanded)}>{expanded ? '-' : '+'}</p>
        {editing ? <input type='text' id='edit-title' value={newTitle} onChange={editTitle}/> : <h5 className={dateCompleted ? 'completed' : null}>{title}</h5>}
        {dateCompleted ? null : <p onClick={complete}>✓</p>}
        {editing ? null : <img onClick={() => setEditing(true)} src={pencil} alt='edit' />}
        <p onClick={remove}>x</p>
    </div>

    const taskBody = <div>
        {details && <p>{newDetails}</p>}
        <p>Date Created: {createdAt}</p>
        {updatedAt && <p>Last Updated: {updatedAt}</p>}
        <p>Date Due: {displayDate}</p>
        {dateCompleted && <p>Date Completed: {dateCompleted}</p>}
        {notes && <p>Notes: {newNotes}</p>}
        {category && <p>Category: {newCategory}</p>}
        <p>Priority: {newPriority}</p>
    </div>

    const editingTaskBody = <div>
        {details && <textarea type='text' value={newDetails} onChange={editDetails} />}
        <p>Date Created: {createdAt}</p>
        {updatedAt && <p>Last Updated: {updatedAt}</p>}
        <div>
            <label for="due-date-picker">Date Due: </label>
            <DatePicker
                selected={new Date(newDueDate)}
                onChange={date => {
                    setNewDueDate(date)
                    submitEdit()
                }}
            />
        </div>

        {dateCompleted && <p>Date Completed: {dateCompleted}</p>}
        {notes && <div>
            <p>Notes: </p> 
            <textarea type='text' value={newNotes} onChange={editNotes} />
        </div>}
        {category && <div id='edit-categories'>
            <p>Category: </p>
            <select value={newCategory} onChange={editCategory}>
                {categories.map(cat => <option value={cat}>{cat}</option>)}
            </select>
        </div>}
        <div id='edit-priority'>
            <p>Priority: </p>
            <div>
                <label>
                    <input
                        type="radio"
                        value="low"
                        checked={newPriority === "low"}
                        onChange={editPriority}
                    />
                    Low
                </label>
                <label>
                    <input
                        type="radio"
                        value="medium"
                        checked={newPriority === "medium"}
                        onChange={editPriority}
                    />
                    Medium
                </label>
                <label>
                    <input
                        type="radio"
                        value="high"
                        checked={newPriority === "high"}
                        onChange={editPriority}
                    />
                    High
                </label>
            </div>
        </div>
    </div>

    const expandedTask = <div className='expanded-task'>
        {editing ? editingTaskBody : taskBody}
    </div>

    return (<div className='task-card' onKeyPress={event => {
        if (event.key === 'Enter') {
            submitEdit()
        }
    }}>
       {taskTitle}
        {expanded ? expandedTask : null}
    </div>)
}

const Tasks = () => {
    const tasks = useSelector(selectTasks)
    const categories= useSelector(selectCategories) 
    // sorting
    // show completed?

    return (<div className='tasks'>
        {tasks.map(task => <Card task={task} categories={categories}/>)}
    </div>)
}


export default Tasks