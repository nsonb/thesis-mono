import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import Navigation from './components/Navigation'
import Authenticate from './components/Authenticate';
import Home from './components/Home';
import Profile from './components/Profile';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

class ProtectedRoute extends Route {
  render() {
    const user = window.localStorage.getItem('user')
    return user? <Route {...this.props}/> : <Redirect {...this.props} to='/auth'/>
  }
}

const App = () => {
  const [ user, setUser ] = useState(window.localStorage.getItem('user'))
  const logIn = (user) => {
    setUser(user)
  }

  const logOut = () => {
    window.localStorage.removeItem('user')
    setUser(null)
  }

  useEffect(() => {}, [user, setUser])
  return (
    <div>
      <BrowserRouter>
        {user !== null ? <Navigation logOut={logOut}/> : null}
        current user is {user}
        <Switch>
          <ProtectedRoute path='/home' component={Home}/>
          <ProtectedRoute path='/profile' component={Profile}/>
          <Route exact path='/auth'>
            <Authenticate logIn={logIn}/>
          </Route>
          <Route path='/'>
            <Redirect to='/home'/>
          </Route>
        </Switch>
      </BrowserRouter>
      </div>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
