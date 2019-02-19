import React from 'react';
import { Link} from "react-router-dom";

export const Navbar = () =>{
  return (
    <nav>
    <Link to="/"><img src="https://img.icons8.com/dotty/40/000000/home.png" alt="favicon here"/></Link>
    <Link to="/dashboard">Dashboard</Link>

    </nav>
  )
}
