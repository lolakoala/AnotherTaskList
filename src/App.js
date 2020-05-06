import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Form from './features/form/Form'

function App() {
  return (
    <div className="App">
    {/* keeping counter in as reference */}
      <header className="App-header">
        <Counter />
      </header>

      <div className="App">
        <h1>Another Task List</h1>
        {/* pre populate button */}
        <Form />
        {/* lists */}
      </div>
    </div>
  );
}

export default App;
