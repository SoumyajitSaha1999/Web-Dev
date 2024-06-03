import React from 'react';
import Header from './Components/Header';
import TodoItem from './Components/TodoItem';
import Button from './Components/Button';

function App() {
  return (
    <div className='todo-container'>
      <Header title="Todo"/>
      <TodoItem text="Eat"/>
      <TodoItem completed="true" text="Code"/>
      <TodoItem text="Play"/>
      <TodoItem text="Study"/>
      <TodoItem text="Sleep"/>
      <Button />
    </div>
  )
}

export default App