import React from "react";
import Style from "./testimonials.module.css";
import icon from "./../../assets/icons/pack.png";

const Item = ({ img, text, name }) => {
  return (
    <div className={Style.item}>
      <img src={img} alt="" className={Style.avatar} />
      <img src={icon} alt="icon" />
      <div className={Style.border}>
        <p className={Style.text}>{text}</p>
        <p className={Style.name}>{name}</p>
      </div>
    </div>
  );
};

export default Item;
