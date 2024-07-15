import React from "react";
import Style from "./filter.module.css";
import Magnifier from "../../assets/icons/magnifier.png";

const Filter = () => {
  return (
    <section id={Style.filtr}>
      <div>
        <p className={Style.title}>Filters</p>
        <div className={Style.filters_btn}>
          <button className={Style.active}>
            all . <span>64</span>
          </button>
          <button>
            News . <span>21</span>
          </button>
          <button>
            Operations . <span>16</span>
          </button>
          <button>
            marketing . <span>5</span>
          </button>
        </div>
      </div>
      <div className="">
        <p className={Style.title}>Search blog</p>
        <form action="" className={Style.serach_form}>
          <img src={Magnifier} alt="Magnifier" />
          <input type="text" placeholder="I wanT read about" />
        </form>
      </div>
    </section>
  );
};

export default Filter;
