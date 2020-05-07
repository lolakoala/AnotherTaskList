import React from 'react';
import './App.css';
import Form from './features/form/Form'
import Tasks from './features/tasks/Tasks'

function App() {
  return (
    <div className="App">
    {/* keeping counter in as reference */}

      <div className="App">
        <header>
          <h1>Another Task List</h1>
          <button>Sandbox Mode</button>
        </header>  
        <Form />
        <Tasks />
      </div>
    </div>
  );
}

export default App;
