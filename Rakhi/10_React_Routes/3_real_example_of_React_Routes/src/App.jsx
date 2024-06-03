import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, NavLink, useParams } from 'react-router-dom'

function Home() {

  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(data => data.json())
      .then(data => setPost(data))
  }, [])
  
  return (
    <div>
      {post.map((e) => <NavLink className= 'post-titles' to={`/post/${e.id}`}>{e.title}</NavLink>)}
    </div>
  )
}

function PostPage() {

  const [data, setData] = useState(null);

  const params = useParams();
  // console.log("params",params); // params {postId: '9'}

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      .then(data => data.json())
      .then(data => setData(data))
  }, [])
  // console.log("Data", data);

  if(data === null) return <p>Loading...</p>

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  )
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/post/:postId' element={<PostPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App