import React from "react";
import Style from "./banner.module.css";
import Banner_img from "../../assets/banner.png";

const Banner = () => {
  return (
    <section id={Style.banner}>
      <img src={Banner_img} alt="" />
      <p className={Style.banner_text}>
        Revolutionizing AI and SEO Solutions for Your Business
      </p>
    </section>
  );
};

export default Banner;
