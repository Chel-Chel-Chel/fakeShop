import { Outlet, Link } from "react-router-dom";

import { useState } from "react";

import {
  AiOutlineHome,
  AiOutlineShoppingCart,
  AiOutlineQuestionCircle,
  AiOutlineLogin,
} from "react-icons/ai";

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
          <div className="desktop">
            <span className="part1">Fake</span>
            <span className="part2">Shop</span>
            <span className="part3">Logo</span>
          </div>
          <AiOutlineHome className="mobile" />
        </Link>
        <Link
          to="shop"
          className={`list-item ${hover && "unhover"}`}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          <div className="desktop">SHOP</div>
          <AiOutlineShoppingCart className="mobile" />
        </Link>
        <Link
          to="contact"
          className={`list-item ${hover && "unhover"}`}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          <div className="desktop">CONTACT</div>
          <AiOutlineQuestionCircle className="mobile" />
        </Link>
        <Link
          to="sign"
          className={`list-item ${hover && "unhover"}`}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          <div className="desktop">SIGN</div>
          <AiOutlineLogin className="mobile" />
        </Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
