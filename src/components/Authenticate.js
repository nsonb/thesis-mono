/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from '@emotion/styled'
import { default_theme } from '../common/Colors'

const FormContainer = styled.form`
  position: relative;
  background-color: ${default_theme.dark_grey};
  padding: 3rem;
  padding-top: 3rem;
  height: 10rem;
  width: 50rem;
  margin: auto;
  margin-top: 15rem;
  box-sizing: border-box;
  border-radius: .5rem;
  color: ${default_theme.second};
  font-family: 'Open Sans', sans-serif;
`

const WelcomeHeader = styled.header`
  position: absolute;
  top: -5rem;
  left: .5rem;
  color: ${default_theme.main};
  font-size: 8rem;
  font-family: 'Titan One', cursive;
  line-height: 7rem;
`

const FormInput = styled.input`
  width: 100%;
  font-size: 1.2rem;
  line-height: 1.5rem;
  height: 2rem;
  border-radius: .3rem;
  margin-top: .5rem;
  box-sizing: border-box;
`

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
    <FormContainer onSubmit={onSubmit}>
      <WelcomeHeader>WELCOME</WelcomeHeader>
      <div>Enter a name and press Enter to log in</div>
      <FormInput type='text' value={user} onChange={(e) => {setUser(e.target.value)}}/>
    </FormContainer>
  )
}

export default Authenticate