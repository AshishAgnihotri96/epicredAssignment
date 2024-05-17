import React, { useState } from "react";
import logo from "../assets/epicred-logo.png";
import phone from "../assets/phone-call.png";
import menu from "../assets/menu-icon.png";
import { CiMenuBurger } from "react-icons/ci";
function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    console.log("showMenu",showMenu)
  };
  return (
    <div>
      <div className="navbar">
       <div className="showMenu">
       <img src={logo} />
        <div className='menu-icon' onClick={toggleMenu}>
        <CiMenuBurger size={30}/>
        </div>
       </div>
        <div className={`navbar-container ${showMenu ? "show-menu":""}`}>
          <p>Home</p>
          <p>Blog</p>
          <p>About Us</p>
          <p>Contact Us</p>
          <div className={`login-phone-div ${showMenu?"yes" :""}`}>
          <div className="login-signup">
            <button className="login-btn">Login</button>
            <button className="signup-btn">Start Loan Application</button>
          </div>
          <div className="phone-call">
            <img className="phone-call-icon" src={phone} />
            <p>+91 - 9877889609</p>
          </div>
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default Navbar;
