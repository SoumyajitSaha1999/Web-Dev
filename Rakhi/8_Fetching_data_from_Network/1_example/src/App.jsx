import React from 'react';
import { getPosts } from './APISS'
import { useEffect } from 'react';
import { useState } from 'react';
import PostCard from './Components/PostCard';

function App() {

  const [data, setData] = useState(null);

  // Our data is needed when the component is mounted. Thats's why we use useEffect
  useEffect(() => {
    // getPosts().then((posts) => console.log(posts));
    getPosts().then((posts) => setData(posts));
  }, [])
  

  return (
    <div>
      {data? data.map((e) => <PostCard title={e.title} body={e.body} />) : <h1>No Data</h1>}
    </div>
  )
}

export default App