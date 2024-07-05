import React, { useState } from "react";
import { Link } from "react-router-dom";
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
            <Link to="/" className={`${Style.link} ${Style.active}`}>
              Home
            </Link>
          </li>
          <li className={Style.item}>
            <Link to="/" className={Style.link}>
              About us
            </Link>
          </li>
          <li className={Style.item}>
            <Link to="/" className={Style.link}>
              Services
            </Link>
          </li>
          <li className={Style.item}>
            <Link to="/" className={Style.link}>
              Blog
            </Link>
          </li>
          <li className={Style.item}>
            <Link to="/" className={Style.link}>
              Contact
            </Link>
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
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
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
