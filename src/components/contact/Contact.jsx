import React from "react";
import Style from "./contact.module.css";

const Contact = ({ title }) => {
  return (
    <section id={Style.contact}>
      {title && <h2>{title}</h2>}
      <form action="">
        <div className={Style.contact_form}>
          <div>
            <div className={Style.form_input}>
              <label htmlFor="first_name">First name</label>
              <input
                type="text"
                id="first_name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className={Style.form_input}>
              <label htmlFor="last_name">Last name</label>
              <input
                type="text"
                id="last_name"
                placeholder="Company name"
                required
              />
            </div>
            <div className={Style.form_input}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
          <div>
            <div className={Style.form_input}>
              <label htmlFor="message">Your message</label>
              <textarea
                id="message"
                placeholder="Enter your message"
                rows={5}
                required
              ></textarea>
            </div>
          </div>
        </div>
        <button className={Style.btn}>Get in touch</button>
      </form>
    </section>
  );
};

export default Contact;
