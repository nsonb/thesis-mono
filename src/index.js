import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './components/Navigation'
import Authenticate from './components/Authenticate';
import Home from './components/Home';
import Profile from './components/Profile';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navigation/>
        <Switch>
          <Route path='/home' component={Home}/>
          <Route path='/auth' component={Authenticate}/>
          <Route path='/profile' component={Profile}/>
        </Switch>
      </BrowserRouter>
      </div>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
