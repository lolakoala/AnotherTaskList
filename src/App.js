import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import Form from './features/form/Form'
import Tasks from './features/tasks/Tasks'
import { toggleSandbox } from './features/tasks/tasksSlice'

function App() {  
  const dispatch = useDispatch()
  const [sandbox, setSandbox] = useState(true)
  const handleToggle = () => {
    setSandbox(!sandbox)
    dispatch(toggleSandbox())
  }

  return (
    <div className="App">
      <h1>Another Task List</h1>
      <button onClick={handleToggle} id='sandbox-button'>Sandbox Mode {sandbox ? 'Off' : 'On'}</button>
      <div className='body'>
        <Form />
        <Tasks />
      </div>  
    </div>
  );
}

export default App;
