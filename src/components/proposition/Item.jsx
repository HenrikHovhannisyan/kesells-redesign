import React from "react";
import Style from "./proposition.module.css";
import CheckMark from "../../assets/icons/check-mark.png";

const Item = ({ title, text }) => {
  return (
    <div className={Style.item}>
      <h3 className={Style.item_title}>
        <img src={CheckMark} alt="" />
        {title}
      </h3>
      <p className={Style.item_text}>{text}</p>
    </div>
  );
};

export default Item;
