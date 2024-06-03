import React from 'react'

function UserCard(props) {
  return (
    <div id='main'>
        <div className='user-card'>
            <img id='img' src={props.data.picture.thumbnail} />
            <h1>{props.data.name.title}. {props.data.name.first} {props.data.name.last}</h1>
            <p>{props.data.phone}</p>
            <p>{props.data.location.city}, {props.data.location.state}</p>
        </div>
    </div>
  )
}

export default UserCard