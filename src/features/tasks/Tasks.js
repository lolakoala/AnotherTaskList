import React from 'react'
import { useSelector } from 'react-redux'
import { selectTasks } from './tasksSlice'

const Tasks = () => {
    const tasks = useSelector(selectTasks)

    return (<div className='tasks'>
        {tasks.map(task => <p>{task.title}</p>)}
    </div>)
}

export default Tasks