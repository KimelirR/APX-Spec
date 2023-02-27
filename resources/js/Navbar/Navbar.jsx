import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {

  return (
    <nav className="sticky">
      <div className="logo">
        Post<font>Codes</font>
      </div>
      <ul className=""><font>Search Locations using post codes</font></ul>
    </nav>
  );
};

export default Navbar;
