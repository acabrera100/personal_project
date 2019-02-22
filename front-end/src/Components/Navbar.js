import React from 'react';
import { Link} from "react-router-dom";
import "../CSS/Navbar.css"


export const Navbar = () =>{
  return (
    <>
      <div className="Navbar">
        <Link to="/dashboard"><img src="https://img.icons8.com/dotty/40/000000/tumblr.png" alt="favicon here"/></Link>

        <form className="search">
        <input className ="text" placeholder="  Search..." type="text" value="" name="search" id="search"/>
        </form>

        <nav className="navbuttons">
        <Link to="/"><img src="https://img.icons8.com/dotty/40/000000/home.png" alt="favicon here"/></Link>
        <Link to="/explore"><img src="https://img.icons8.com/dotty/40/000000/compass.png" alt='favicon here'/></Link>
        <Link to="/dashboard"><img src="https://img.icons8.com/dotty/40/000000/for-you.png" alt='favicon here'/></Link>
        <Link to="/login"><img src="https://img.icons8.com/dotty/40/000000/gender-neutral-user.png" alt="favicon here"/></Link>

        </nav>
    </div>
    <hr/>
    </>
  )
}

// // <input type="text" placeholder= <img src="https://img.icons8.com/dotty/20/000000/search.png"alt='something'/>/
