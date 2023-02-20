import { useState } from "react";
import { Link } from "react-router-dom";
import { CgMenu } from "react-icons/cg";
import { GrClose } from "react-icons/gr";

/****import images ******/
import logo from "../assets/logo.svg";

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const handleMenuClick = () => {
    setShowNav(!showNav);
  };

  return (
    <header className="navbar">
      <nav className="navbar__content container">
        <div className="mobile__navbar">
          <Link to="/">
            <img src={logo} alt="Shortly logo" />
          </Link>
          <button onClick={handleMenuClick} className="navbar__toggle">
            {showNav ? <GrClose /> : <CgMenu />}
          </button>
        </div>
        <div
          className={`navbar__menu ${
            showNav ? "show__navbar" : "hide__navbar"
          }`}
        >
          <ul className="menu">
            <li>
              <Link to="/features">Features</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/resources">Resources</Link>
            </li>
          </ul>
          <span className="line"></span>
          <ul className="navbar__buttons">
            <li>
              <Link to="/login" className="btn-login">
                Login
              </Link>
            </li>
            <li className="btn btn--rounded">
              <Link to="/signup" className="">
                Signup
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
