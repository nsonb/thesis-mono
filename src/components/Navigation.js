import styled from '@emotion/styled'
import { useHistory } from 'react-router-dom'

const NavButton = styled.div`
  display: block;
  background-color: grey;
  color: white;
  height: 3rem;
  width: 6rem;
  padding: .5rem;
  line-height: 3rem;
  text-align: center;
  cursor: pointer;

  &:last-child {
    margin-left: auto;
  }
`

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  min-width: 12rem;
  margin: auto;
  background-color: pink;
  overflow: hidden;
  border-radius: .2rem;
`

const Navigation = () => {
  let history = useHistory()
  const goTo = (location) => {
    history.push(location)
  }
  return (
    <NavContainer>
      <NavButton onClick={ () => {
        goTo('/home')
      }}>
        Home
      </NavButton>
      <NavButton onClick={ () => {
        goTo('/profile')
      }}>Profile
      </NavButton>
      <NavButton onClick={ () => {
        console.log('log out')
      }}>Log Out
      </NavButton>
    </NavContainer>
  )
}

export default Navigation