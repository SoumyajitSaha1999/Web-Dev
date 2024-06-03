import React from 'react'

function Students(props) {
  const {name, marks} = props;
  return (
    <>
      <h1>Hello, {name}</h1>
      <p>You have secured {marks}%</p>
    </>
  )
}

export default Students