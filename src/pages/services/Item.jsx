import React from "react";
import Style from "./services.module.css";

const Item = ({ active, icon, title, text }) => {
  return (
    <section className={`${Style.item} ${active ? Style.active : ""}`}>
      <img src={icon} alt={title} />
      <h3 className={Style.title}>{title}</h3>
      <p className={Style.text}>{text}</p>
    </section>
  );
};

export default Item;
