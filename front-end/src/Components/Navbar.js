import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../CSS/Navbar.css";
import axios from "axios"

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: ""
    };
  }
  handleSearchbar = event => {
    event.preventDefault()


  axios.get(`/posts/tag/:id`, this.state.searchInput ).then(res => {
    console.log(res);
    console.log(res.data);
  });

};
// Searchbar text change
handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
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
              value={this.searchInput}
              name="search"
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
            <Link to="/login">
              <img
                src="https://img.icons8.com/dotty/40/000000/gender-neutral-user.png"
                alt="favicon here"
              />
            </Link>
          </nav>
        </div>
        <hr />
      </>
    );
  }
}
export default Navbar;

// // <input type="text" placeholder= <img src="https://img.icons8.com/dotty/20/000000/search.png"alt='something'/>/
