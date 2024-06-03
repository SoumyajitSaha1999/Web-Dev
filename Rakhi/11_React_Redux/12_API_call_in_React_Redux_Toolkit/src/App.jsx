import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodos } from './redux/todo/todoSlice'

function App() {

  const dispatch = useDispatch();
  const state = useSelector(state => state);
  console.log("State", state);

  if(state.todo.isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <button onClick={() => dispatch(fetchTodos())}>Fetch Todos</button>
      {state.todo.data && state.todo.data.map((e) => <li>{e.title}</li>)}
    </div>
  )
}

export default App