import React from 'react';
import { Link} from "react-router-dom";
import "../CSS/Navbar.css"


export const Navbar = () =>{
  return (
    <>
      <div className="Navbar">
    <img src="https://img.icons8.com/dotty/40/000000/tumblr.png" alt="Img Not Working"/>
    <form className="search">
    <input type="text" placeholder="Searchbar"/>
    </form>
    <nav className="navbuttons">
    <Link to="/"><img src="https://img.icons8.com/dotty/40/000000/home.png" alt="favicon here"/></Link>
    <Link to="/dashboard"><img src="https://img.icons8.com/dotty/40/000000/for-you.png" alt='favicon here'/></Link>
    </nav>
    </div>
    <hr/>
    </>
  )
}
