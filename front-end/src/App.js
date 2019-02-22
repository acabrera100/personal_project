import React, { Component } from "react";
import { Switch, Link , Route  } from "react-router-dom";
// import { Navbar } from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";
// import { Home } from "./Components/Home";
// import { Explore } from "./Components/Explore";
// import { Login } from "./Components/Login";
import axios from "axios";
import AuthForm from "./login/AuthForm";
import Auth from "./utils/Auth";
import PrivateRoute from "./utils/AuthRouting";

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
          <button onClick={this.logoutUser}>Logout</button> {" ~ "}
        </span>
      ) : null;

      return (
        <div>
          <nav>
            {greeting} {logoutButton}
            <Link to="/auth/register">Register</Link> {" ~ "}
            <Link to="/auth/login">Log In</Link> {" ~ "}
            <Link to="/dashboard">Dashboard</Link>
          </nav>

          <Switch>
            <Route
              path="/auth"
              render={() => {
                return (
                  <AuthForm
                    checkAuthenticateStatus={this.checkAuthenticateStatus}
                    isLoggedIn={isLoggedIn}
                  />
                );
              }}
            />
            <PrivateRoute path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      );
    }
  }


export default App;




//
// render() {
//   return (
//     <BrowserRouter>
//       <div className="App">
//         <Route component={Navbar} />
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route exact path="/dashboard" component={Dashboard} />
//           <Route exact path="/explore" component={Explore} />
//           <Route exact path="/login" component={Login} />
//         </Switch>
//       </div>
//     </BrowserRouter>
//   );
// }
// }
