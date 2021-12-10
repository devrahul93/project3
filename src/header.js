import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div id="brand">Developer Funnel</div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div id="social">
        <a href="https://facebook.com/">
          <img src="images/facebook.png" alt="fb" className="socialImg" />
        </a>
        <a href="https://Instagram.com/">
          <img src="images/insta.png" alt="insta" className="socialImg" />
        </a>
      </div>
    </div>
  );
};

export default Header;
