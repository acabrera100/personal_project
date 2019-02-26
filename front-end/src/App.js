import React, { Component } from "react";
import { Switch, Link, Route } from "react-router-dom";
// import { Navbar } from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";
import { Home } from "./Components/Home";
// import { Explore } from "./Components/Explore";
// import { Login } from "./Components/Login";
import axios from "axios";
// import AuthForm from "./Components/login/AuthForm.js";
import loginContainer from "./Containers/loginContainer.js"
import Auth from "./utils/Auth";
import PrivateRoute from "./utils/AuthRouting";
// import { connect } from "react-redux";
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
    axios.get("/session/isLoggedIn").then(user => {
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
      .post("/session/logout")
      .then(() => {
        Auth.deauthenticateUser();
      })
      .then(() => {
        this.checkAuthenticateStatus();
      });
  };

  render() {
    const { isLoggedIn, username } = this.state;
    let greeting = isLoggedIn ? (
      <span>
        Welcome {username} {" ~ "}
      </span>
    ) : null;
    let logoutButton = isLoggedIn ? (
      <span>
        <button className="logoutButton" onClick={this.logoutUser}>
          Logout
        </button>{" "}
        {" ~ "}
      </span>
    ) : null;

    return (
      <div className="App">
        <nav>
          {greeting} {logoutButton}
          <Link to="/auth/register">Register</Link> {" ~ "}
          <Link to="/auth/login">Log In</Link> {" ~ "}
          <Link to="/dashboard">Dashboard</Link>{" ~ "}
          <Link to="/home">Home</Link>
        </nav>

        <Switch>
          <Route
            path="/auth"
            component ={loginContainer}
          />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/home" component={Home} />
        </Switch>
      </div>
    );
  }
}



export default App;
