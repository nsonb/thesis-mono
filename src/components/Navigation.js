import styled from '@emotion/styled'
import { useHistory } from 'react-router-dom'

const NavButton = styled.div`
  display: block;
  background-color: grey;
  color: white;
  height: 1.6rem;
  width: 6rem;
  padding: .5rem;
  line-height: 1.6rem;
  text-align: center;
  cursor: pointer;
  &:last-child {
    margin-left: auto;
  }
`

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 35vw;
  min-width: 480px;
  margin: auto;
  overflow: hidden;
  border-radius: .2rem;
`

const Navigation = (props) => {
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
        window.localStorage.removeItem('user')
        history.push('/auth')
        props.logOut()
      }}>Log Out
      </NavButton>
    </NavContainer>
  )
}

export default Navigation