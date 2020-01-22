//@flow
import React from 'react';
import {Route, Link, Switch, BrowserRouter as Router, withRouter} from 'react-router-dom';
import {LoadScript}  from '@react-google-maps/api';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import aboutMe from './pages/aboutMe';
import Landing from './pages/landing';
import GasMoney from './pages/gasMoney';

function App() {
  
  return (  

   <Router> 
   <LoadScript
          id="script-loader"
          googleMapsApiKey="AIzaSyCmFG2_lNsVip681FctETIpGuqiFnABTCc"
          libraries={['places']}
        >
    <Navigation />
    <Switch>
    <Route exact path='/' component={withRouter(Landing)} />
    <Route path='/About' component={withRouter(aboutMe)} />
    <Route path='/Gas' component={withRouter(GasMoney)} />
    
    </Switch>
    </LoadScript>
    </Router>
  );
  
}

export default App;
