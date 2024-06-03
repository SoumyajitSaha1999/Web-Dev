import React from 'react'

function Students(props) {
  console.log(props);
  return (
    <>
      <h1>Hello, {props.name}</h1>
      <p>You have secured {props.marks}%</p>
      <hr />
    </>
  )
}

export default Students


// Another way is
// import React from 'react'

// function Students(props) {
//   console.log(props);
//   const {name, marks} = props;
//   return (
//     <>
//       <h1>Hello, {name}</h1>
//       <p>You have secured {marks}%</p>
//       <hr />
//     </>
//   )
// }

// export default Students