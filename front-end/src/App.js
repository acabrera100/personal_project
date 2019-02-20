import React, { Component } from "react";
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import {Navbar} from './Components/Navbar'
import Dashboard from './Components/Dashboard'
import {Home} from './Components/Home'
import {Explore} from './Components/Explore'
import {Login} from './Components/Login'

import "./App.css";

class App extends Component {
  render() {
  return (
    <BrowserRouter>
      <div className = "App">
      <Route component={Navbar}/>
        <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/dashboard' component={Dashboard}/>
        <Route exact path='/explore' component={Explore}/>
        <Route exact path='/login' component={Login}/>




        </Switch>
      </div>
    </BrowserRouter>
  )
  }
}

export default App;
