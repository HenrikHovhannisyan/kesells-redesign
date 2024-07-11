import React from "react";
import Style from "./blog.module.css";

const Item = ({ img, title, text, type, date, read, isFirst }) => {
  return (
    <div className={`${Style.item} ${isFirst ? Style.item_first : ""}`}>
      <img src={img} alt={title} />
      <div className={Style.item_container}>
        <p className={Style.item_title}>{title}</p>
        <p className={Style.item_text}>{text}</p>
        <div className={Style.item_bottom}>
          <p className={Style.item_type}>{type}</p>
          <p className={Style.item_date}>
            {date} . {read}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Item;
