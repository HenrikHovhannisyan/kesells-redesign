import React from "react";
import Style from "./info.module.css";

const Top = ({text}) => {
  return (
    <div className={Style.top_container}>
      <p className={Style.top_text}>
        {text}
      </p>
    </div>
  );
};

export default Top;
