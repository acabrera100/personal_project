import React from "react";
import { withRouter } from "react-router";
import "../../CSS/Login.css"

const Form = ({
  match,
  username,
  password,
  email,
  isLoggedIn,
  loginUser,
  registerUser,
  handleChange
}) => {
  const path = match.path;
  return (
    <React.Fragment>
    <div className="loginDiv">
      <h1> {path === "/auth/login" ? "Login" : "Register"} </h1>
      <form className="loginInput" onSubmit={path === "/auth/login" ? loginUser : registerUser}>
        <input
          type="text"
          value={username}
          name="username"
          placeholder="username"
          onChange={handleChange}
        />
        <input
          type="text"
          value={password}
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        <input
          type="text"
          value={email}
          name="email"
          placeholder="email"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <p>{isLoggedIn ? "Logged In!" : ""}</p>
      </div>
    </React.Fragment>
  );
};

export default withRouter(Form);

// <input
//   type="text"
//   value={email}
//   name="email"
//   placeholder="email"
//   onChange={handleChange}
// />
