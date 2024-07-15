import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Style from "./header.module.css";
import Logo from "../../assets/logo.png";
import DropdownLogo from "../../assets/icons/dropdown.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="container">
      <nav>
        <img src={Logo} alt="Logo" className={Style.logo} />
        <ul className={`${Style.list} ${isOpen ? Style.open : ""}`}>
          <li className={`${Style.item}`}>
            <NavLink to="/" className={`nav_link ${Style.link}`}>
              Home
            </NavLink>
          </li>
          <li className={Style.item}>
            <NavLink to="/about" className={`nav_link ${Style.link}`}>
              About us
            </NavLink>
          </li>
          <li className={Style.item}>
            <NavLink to="/services" className={`nav_link ${Style.link}`}>
              Services
            </NavLink>
          </li>
          <li className={Style.item}>
            <NavLink to="/blog" className={`nav_link ${Style.link}`}>
              Blog
            </NavLink>
          </li>
          <li className={Style.item}>
            <NavLink to="/contact" className={`nav_link ${Style.link}`}>
              Contact
            </NavLink>
          </li>
          <div className={Style.dropdown}>
            <button className={Style.dropbtn} onClick={toggleDropdown}>
              <img
                src={DropdownLogo}
                alt="Dropdown Logo"
                className={Style.dropdown_logo}
              />
            </button>
            <div
              className={`${Style.dropdown_content} ${
                isDropdownOpen ? Style.show : ""
              }`}
            >
              <Link to="#">Link 1</Link>
              <Link to="#">Link 2</Link>
              <Link to="#">Link 3</Link>
            </div>
          </div>
        </ul>
        <button className={Style.hamburger} onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </nav>
    </header>
  );
};

export default Header;
