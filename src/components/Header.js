import React from "react";
import blooit from "./../img/blooit.png";

function Header() {
  return (
    <div className="header">
      <img src={blooit} alt="you bloo it" className="header--image" />
      <h1 className="header--title">blooit</h1> 
      
      <h2 className="header--subtitle">You wanted reddit? Well, you blooit.</h2>
      {/* alternate tag line: "you wanted reddit? well, you blooit." */}
    </div>
  )
}

export default Header;