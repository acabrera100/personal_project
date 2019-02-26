import React, { Component } from "react";
import axios from "axios";
// import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";
import Auth from "../../utils/Auth";
import Form from "./Form";


class AuthForm extends Component {
  state = {
    username: "",
    password: "",
    email:''
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  registerUser = async e => {
    e.preventDefault();
    const { username, password,email } = this.state;

    await axios.post("/session/new", { username, password, email });

    Auth.authenticateUser(username);

    await axios.post("/session/login", { username, password });

    await this.props.checkAuthenticateStatus();

    this.setState({
      username: "",
      password: ""
    });
    // axios.post("/users/new", { username, password }).then(() => {
    //   Auth.authenticateUser(username);
    //   axios
    //     .post("/users/login", { username, password })
    //     .then(() => {
    //       this.props.checkAuthenticateStatus();
    //     })
    //     .then(() => {
    //       this.setState({
    //         username: "",
    //         password: ""
    //       });
    //     });
    // });
  };

  loginUser = e => {
    e.preventDefault();
  let loginData = {
    username:this.state.username,
    password:this.state.password
  }
  this.props.login(loginData)

  };

  render() {
    const { username, password,email } = this.state;
    const { isLoggedIn } = this.props;
console.log(this.state);
    return (
      <Switch>
        <Route
          path="/auth/login"
          render={() => {
            return (
              <Form
                username={username}
                password={password}
                email={email}
                isLoggedIn={isLoggedIn}
                loginUser={this.loginUser}
                registerUser={this.registerUser}
                handleChange={this.handleChange}
              />
            );
          }}
        />
        <Route
          path="/auth/register"
          render={() => {
            return (
              <Form
                username={username}
                password={password}
                isLoggedIn={isLoggedIn}
                loginUser={this.loginUser}
                registerUser={this.registerUser}
                handleChange={this.handleChange}
              />
            );
          }}
        />
      </Switch>
    );
  }
}

export default AuthForm;

//
// loginUser = e => {
//   e.preventDefault();
//   const { username, password } = this.state;
//
//   axios
//     .post("/session/login", { username, password })
//     .then(() => {
//       Auth.authenticateUser(username);
//     })
//     .then(() => {
//       this.props.checkAuthenticateStatus();
//     })
//     .then(() => {
//       this.setState({
//         username: "",
//         password: ""
//       });
//     });
// };
