import React, { useEffect, useState } from 'react';
import { getRandomUser } from "./APII"
import UserCard from './Components/UserCard';

function App() {

  const [users, setUsers] = useState(null)

  useEffect(() => {
    // getRandomUser().then((user) => console.log(user));
    getRandomUser().then((user) => setUsers(user.results[0]));
  }, [])

  // For refresh button
  const refresh = () => {
    getRandomUser().then((user) => setUsers(user.results[0]));
  }
  
  return (
    <div>
      {users? <UserCard data={users} /> : <h1>No Data</h1>}
      <div id='btn'><button id='button' onClick={refresh}>Refresh</button></div>
      
    </div>
  )
}

export default App

