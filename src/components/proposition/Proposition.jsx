import React from "react";
import Style from "./proposition.module.css";
import Item from "./Item";

const Proposition = () => {
  return (
    <section id={Style.proposition} className="container">
      <h3 className={Style.title}>Value proposition</h3>
      <Item
        title="High preference"
        text="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since ."
      />
      <Item
        title="High preference"
        text="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since ."
      />
      <Item
        title="High preference"
        text="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since ."
      />
    </section>
  );
};

export default Proposition;
