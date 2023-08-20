import React, { useState } from "react";
import { BsYoutube, BsLinkedin} from  'react-icons/bs';
import {HiMenu} from 'react-icons/hi';
import { NavLink } from "react-router-dom";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/blacklogo.jpg"
function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            
          <img src={logo} alt="" className="h-[3rem]" />
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
            <Link
              to="/"
                className="nav-links"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
            <a 
            href = '#games'
                className="nav-links"
              >
                About Us
              </a >
            </li>
            <li className="nav-item">
              <a
              href="#about"
                className="nav-links"
              >
                Discover
              </a>
            </li>
            <li className="nav-item">
            <a
              href="#contact"
                className="nav-links"
              >
                Login
              </a>
            </li>
            <li className="nav-item">
            <a
              href="#contact"
                className="nav-links"
              >
             <button
      type="button"
      className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
    >
      Donate Now
    </button>
              </a>
            </li>
          </ul>
          
         <ul className="socials">
          <li><a href="https://www.linkedin.com/company/felicity-games/" className="social__link"><BsLinkedin/></a></li>
          <li><a href="https://www.youtube.com/@FelicityGames" className="social__link"><BsYoutube/></a></li>
          </ul>

          <div className="nav-icon" onClick={handleClick}>
          <HiMenu/>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;