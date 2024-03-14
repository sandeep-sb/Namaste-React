import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="burger logo with crown" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              loginBtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login");
            }}
          >
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
