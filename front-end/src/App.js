import React, { Component } from "react";
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import {Navbar} from './Components/Navbar'
import Dashboard from './Components/Dashboard'
import {Home} from './Components/Home'

import "./App.css";

class App extends Component {
  render() {
  return (
    <BrowserRouter>
      <div className = "App">
      This is Tumbles
      <Route component={Navbar}/>
        <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/dashboard' component={Dashboard}/>

        </Switch>
      </div>
    </BrowserRouter>
  )
  }
}

export default App;
