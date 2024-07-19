import React from "react";
import Style from "./testimonials.module.css";
import Item from "./Item";
import avatar1 from "./../../assets/testimonials/1.png";
import avatar2 from "./../../assets/testimonials/2.png";
import avatar3 from "./../../assets/testimonials/3.png";

const Testimonials = () => {
  return (
    <section id={Style.testimonials}>
      <h2>Testimonials</h2>
      <div className={Style.testimonials_items}>
        <Item
          img={avatar1}
          text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          name="Name Surname"
        />
        <Item
          img={avatar2}
          text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          name="Name Surname"
        />
        <Item
          img={avatar3}
          text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          name="Name Surname"
        />
      </div>
    </section>
  );
};

export default Testimonials;
