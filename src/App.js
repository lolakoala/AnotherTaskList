import React from 'react';
import './App.css';
import Form from './features/form/Form'
import Tasks from './features/tasks/Tasks'

function App() {
  return (
    <div className="App">
    {/* keeping counter in as reference */}

      <div className="App">
        <h1>Another Task List</h1>
        {/* pre populate button */}
        <Form />
        <Tasks />
      </div>
    </div>
  );
}

export default App;
