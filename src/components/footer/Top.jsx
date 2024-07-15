import React from "react";
import Style from "./footer.module.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import Instagram from "../../assets/icons/instagram.png";
import Linkedin from "../../assets/icons/linkedin.png";

const Top = () => {
  return (
    <div className={Style.top_section}>
      <div className={Style.logo_section}>
        <img src={Logo} alt="Logo" height={50} />
        <form action="">
          <label htmlFor="email">Subcribe to our newsletter</label>
          <div>
            <input
              type="email"
              id="email"
              placeholder="Your email address…"
              required
            />
            <button>Subscribe</button>
          </div>
        </form>
      </div>
      <ul className={Style.list}>
        <li>
          <Link to="/" className={Style.list_item}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className={Style.list_item}>
            About us
          </Link>
        </li>
        <li>
          <Link to="/services" className={Style.list_item}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/blog" className={Style.list_item}>
            Blog
          </Link>
        </li>
        <li>
          <Link to="/contact" className={Style.list_item}>
            Contact
          </Link>
        </li>
      </ul>
      <div className={Style.info}>
        <h3 className={Style.info_title}>GET IN TOUCH</h3>
        <p>2234758916725</p>
        <p>cogioai@gmail.com</p>
        <div className={Style.footer_icons}>
          <Link to="#">
            <img src={Instagram} alt="Instagram" />
          </Link>
          <Link to="#">
            <img src={Linkedin} alt="Linkedin" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Top;
