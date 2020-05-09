import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectTasks, markComplete, removeTask } from './tasksSlice'

const Card = ({task}) => {
    const dispatch = useDispatch()
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
        id
    } = task
    const complete = () => {
        dispatch(markComplete(id))
    }
    const remove = () => {
        dispatch(removeTask(id))
    }

    return (<div className='task-card'>
        <div className='mini-task'>
            <p onClick={() => setExpanded(!expanded)}>{expanded ? '-' : '+'}</p>
            <h5 className={dateCompleted ? 'completed' : 'title'}>{title}</h5>
            {dateCompleted ? null : <p onClick={complete}>✓</p>}
            <p onClick={remove}>x</p>
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