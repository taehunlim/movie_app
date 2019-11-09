import React from 'react';
import Potato from './potato';

function App() {
  return (
    <div className="App">
        <h1>아무거나</h1>
        <Potato favourite="kimchi" />
        <Potato favourite="mando" />
        <Potato favourite="pizza" />
    </div>
  );
}

export default App;
