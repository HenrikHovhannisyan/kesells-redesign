import React from "react";
import Style from "./contact-us.module.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Contact from "../../components/contact/Contact";
import { Link } from "react-router-dom";
import Instagram from "../../assets/icons/instagram-50.png";
import Linkedin from "../../assets/icons/linkedin-50.png";

const ContactUs = () => {
  return (
    <>
      <Header />
      <main>
        <section id={Style.contact_us}>
          <h2>Contact Us</h2>
          <div className={Style.contact_info}>
            <div className="">
              <h3>Social media</h3>
              <div className={Style.social}>
                <Link to="#">
                  <img src={Instagram} alt="Instagram" />
                </Link>
                <Link to="#">
                  <img src={Linkedin} alt="Linkedin" />
                </Link>
              </div>
            </div>
            <div className="">
              <h3>Social media</h3>
              <p>2234758916725</p>
              <p>cogioai@gmail.com</p>
            </div>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default ContactUs;
