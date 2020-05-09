import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectTasks } from './tasksSlice'

const Card = ({task}) => {
    const [expanded, setExpanded] = useState(false)
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
    } = task

    return (<div className='task-card'>
        <div className='mini-task'>
            <p onClick={() => setExpanded(!expanded)}>{expanded ? '-' : '+'}</p>
            {/* if completed, strike through */}
            <h5>{title}</h5>
            {dateCompleted ? null : <p>✓</p>}
            <p>x</p>
        </div>
        {expanded ? <div className='expanded-task'>
            {details && <p>{details}</p>}
            <p>Date Created: {createdAt}</p>
            {updatedAt && <p>Last Updated: {updatedAt}</p>}
            <p>Date Due: {dueDate}</p>
            {dateCompleted && <p>Date Completed: {dateCompleted}</p>}
            {notes && <p>Notes: {notes}</p>}
            {category && <p>Category: {category}</p>}
            <p>Priority: {priority}</p>
        </div> : null}

    </div>)
}

const Tasks = () => {
    const tasks = useSelector(selectTasks)
    // sorting
    // show completed?

    return (<div className='tasks'>
        {tasks.map(task => <Card task={task}/>)}
    </div>)
}


export default Tasks