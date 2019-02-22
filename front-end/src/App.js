import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";
import { Home } from "./Components/Home";
import { Explore } from "./Components/Explore";
import { Login } from "./Components/Login";
import axios from "axios";
import Auth from "./utils/Auth";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isloggedIn: false,
      user: ""
    };
  }
  componentDidMount() {
    // check if user is logged in on refresh
    this.checkAuthenticateStatus();
  }

  checkAuthenticateStatus = () => {
    axios.get("/users/isLoggedIn").then(user => {
      if (user.data.username === Auth.getToken()) {
        this.setState({
          isLoggedIn: Auth.isUserAuthenticated(),
          username: Auth.getToken()
        });
      } else {
        if (user.data.username) {
          this.logoutUser();
        } else {
          Auth.deauthenticateUser();
        }
      }
    });
  };

  logoutUser = () => {
    axios
      .post("/users/logout")
      .then(() => {
        Auth.deauthenticateUser();
      })
      .then(() => {
        this.checkAuthenticateStatus();
      });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route component={Navbar} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/explore" component={Explore} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
