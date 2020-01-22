//@flow
import React from 'react';
import {Route, Link, Switch, BrowserRouter as Router, withRouter} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import aboutMe from './pages/aboutMe';
import Landing from './pages/landing';
import GasMoney from './pages/gasMoney';

function App() {
  
  return (  

   <Router> 
    <Navigation />
    <Switch>
    <Route exact path='/' component={withRouter(Landing)} />
    <Route path='/About' component={withRouter(aboutMe)} />
    <Route path='/Gas' component={withRouter(GasMoney)} />
    
    </Switch>
    </Router>
  );
  
}

export default App;
