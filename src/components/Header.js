import React from "react";
import blooit from "./../img/blooit.png";

function Header() {
  return (
    <div className="header">
      <img src={blooit} alt="you bloo it" className="header--image" />
      <h1 className="header--title">Blooit</h1> 
      
      <h2 className="header--subtitle">The hairy smelly armpit of the Internet.</h2>
    </div>
  )
}

export default Header;