import React from "react";
import Style from "./banner.module.css";

const Banner = ({ title, text, img }) => {
  return (
    <section id={Style.banner}>
      <img src={img} alt="Banner" />
      {title && <p className={Style.banner_title}>{title}</p>}
      {text && <p className={Style.banner_text}>{text}</p>}
    </section>
  );
};

export default Banner;
