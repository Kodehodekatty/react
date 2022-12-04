import React from "react";
import Image from "../images/react-icon-small.png";

export default function Navbar() {
  return (
    <nav className="main_nav">
      {" "}
      <img className="icon_nav" src={Image} alt="ITSANIMAGE" />
      <h3 className="navbar_h3"> ReactFacts </h3>
      <h4 className="navbar_h1"> React Course- Project 1 </h4>
    </nav>
  );
}
