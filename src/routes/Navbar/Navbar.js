import { Outlet, Link } from "react-router-dom";

import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(true);
  };

  const handleLeave = () => {
    setHover(false);
  };

  return (
    <>
      <nav className="nav">
        <Link
          to="/"
          className={`list-item logo`}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          <span className="part1">Fake</span>
          <span className="part2">Shop</span>
          <span className="part3">Logo</span>
        </Link>
        <Link
          to="shop"
          className={`list-item ${hover && "unhover"}`}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          SHOP
        </Link>
        <Link
          to="contact"
          className={`list-item ${hover && "unhover"}`}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          CONTACT
        </Link>
        <Link
          to="sign"
          className={`list-item ${hover && "unhover"}`}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          SIGN
        </Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
