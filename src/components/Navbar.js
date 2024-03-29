import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {

    const changeWindowSize = () => {
      setWindowSize(window.innerWidth);
    }
    window.addEventListener('resize', changeWindowSize);
    return (() => { window.removeEventListener('resize', changeWindowSize) });
  }, []);

  return (
    <>
      {windowSize < 650 ? (
        <nav className="mobile-navbar">
          <NavLink to="/home" activeclassname="active">
            <i className="fas fa-home"></i>
          </NavLink>
          <NavLink to="/projects/all" activeclassname="active">
            <i className="fas fa-images"></i>
          </NavLink>
          <NavLink to="/about_me" activeclassname="navActive">
            <i className="fas fa-mountain"></i>
          </NavLink>
          <NavLink to="/contact" activeclassname="active">
            <i className="fas fa-address-book"></i>
          </NavLink>
        </nav>
      ) : (
        <nav className="navbar">
          <NavLink to="/home" activeclassname="active">
            <span>/home </span>
          </NavLink>
          <NavLink to="/projects/all" activeclassname="active">
            <span>/projects </span>
          </NavLink>
          <NavLink to="/about_me" activeclassname="navActive">
            <span>/about_me </span>
          </NavLink>
          <NavLink to="/contact" activeclassname="active">
            <span>/contact </span>
          </NavLink>
        </nav>
      )}
    </>
  );
};

export default Navbar;
