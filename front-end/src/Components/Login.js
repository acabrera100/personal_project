import React from 'react';
import "../CSS/Login.css";

export const Login=()=>{
  return(<>

      <h2> Login Page </h2>
        <div className="loginDiv">
      <form className="loginInput">
      <input type="text"placeholder="Username"/>
      <br/>
      <input type="text"placeholder="Password"/>
      <br/>
      <button>Login </button>
      </form>
      <p> forgot password?  </p>
    </div>
    </>)
}
