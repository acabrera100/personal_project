import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../CSS/Navbar.css";
import axios from "axios";
import Auth from "../utils/Auth";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: ""
    };
  }
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
  checkAuthenticateStatus = () => {
    axios.get("/session/isLoggedIn").then(user => {
      if (user.data.username === Auth.getToken()) {
        this.setState({
          isLoggedIn: Auth.isUserAuthenticated(),
          usernamename: Auth.getToken()
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
  handleSearchbar = event => {
    event.preventDefault();
    axios.get(`/posts/tag/${this.state.searchInput}`).then(res => {
      console.log(res);
      console.log(res.data);
      if (!res.data.body.length) {
        console.log("Nothing here");
      }
    });
  };

  // Searchbar text change
  handleChange = e => {
    console.log(this.state.searchInput);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    // const { isLoggedIn } = this.props;
    //
    // let logoutButton = this.props.isLoggedIn ? (
    //   <span>
    //     <button className="logoutButton" onClick={this.logoutUser}>
    //       Logout
    //     </button>{" "}
    //     {" ~ "}
    //   </span>
    // ) : null;

    return (
      <>
        <div className="Navbar">
          <Link to="/dashboard">
            <img
              src="https://img.icons8.com/dotty/40/000000/tumblr.png"
              alt="favicon here"
            />
          </Link>

          <form className="search" onSubmit={this.handleSearchbar}>
            <input
              className="text"
              placeholder="  Search..."
              type="text"
              name="searchInput"
              id="search"
              onChange={this.handleChange}
            />
          </form>

          <nav className="navbuttons">
            <Link to="/">
              <img
                src="https://img.icons8.com/dotty/40/000000/home.png"
                alt="favicon here"
              />
            </Link>
            <Link to="/explore">
              <img
                src="https://img.icons8.com/dotty/40/000000/compass.png"
                alt="favicon here"
              />
            </Link>
            <Link to="/dashboard">
              <img
                src="https://img.icons8.com/dotty/40/000000/for-you.png"
                alt="favicon here"
              />
            </Link>
            <button onClick={this.logoutUser}>
              <img
                src="https://img.icons8.com/dotty/20/000000/gender-neutral-user.png"
                alt="favicon here"
              />
            </button>
          </nav>
        </div>
        <hr />
      </>
    );
  }
}
export default Navbar;
// let greeting = isLoggedIn ? (
//   <span>
//     Welcome {this.props.username} {" ~ "}
//   </span>
// ) : null;
// // <input type="text" placeholder= <img src="https://img.icons8.com/dotty/20/000000/search.png"alt='something'/>/
