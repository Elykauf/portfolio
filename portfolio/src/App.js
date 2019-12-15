//@flow
import React from 'react';
import {Route, Link, Switch, Router, withRouter} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import aboutMe from './pages/aboutMe';
import Landing from './pages/landing';

const routing = (
  <Router>
  <Switch>
    <Route exact path='/' component={Landing} />
    <Route path='/AboutMe' component={aboutMe} />
  </Switch>
  
    </Router>
);
function App() {
  return (  

   <> 
    <Navigation />
    {routing}
    </>
  );
}

export default withRouter(App);
