/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Authenticate = (props) => {
  const [user, setUser] = useState('')
  const history = useHistory()
  const onSubmit = (e) => {
    e.preventDefault()
    console.log(e)
    window.localStorage.setItem('user', user)
    props.logIn(user)
    history.replace('/home')
  }

  return (
    <form onSubmit={onSubmit}>
      <div>Username</div>
      <div>{user}</div>
      <input type='text' value={user} onChange={(e) => {setUser(e.target.value)}}/>
    </form>
  )
}

export default Authenticate