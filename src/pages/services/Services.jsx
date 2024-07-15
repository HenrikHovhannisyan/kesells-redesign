import React from "react";
import Style from "./services.module.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Contact from "../../components/contact/Contact";
import Item from "./Item";
import Consulting from "../../assets/icons/consulting.png";
import Solutions from "../../assets/icons/solutions.png";
import Analytics from "../../assets/icons/analytics.png";
import Models from "../../assets/icons/models.png";
import Audits from "../../assets/icons/audits.png";
import Research from "../../assets/icons/research.png";
import Seo from "../../assets/icons/seo.png";
import Building from "../../assets/icons/building.png";

const Services = () => {
  return (
    <>
      <Header />
      <main className="container ">
        <section className={Style.info}>
          <h2 className={Style.title}>Services</h2>
          <p className={Style.description}>
            At Cogio AI, we specialize in developing cutting-edge AI and SEO
            solutions tailored to your business needs. Our team of experts is
            dedicated to delivering innovative strategies that drive growth and
            success.”
          </p>
        </section>
        <section className={Style.block}>
          <h2 className={Style.title}>AI Services</h2>
          <div className={Style.items}>
            <Item
              active={true}
              icon={Consulting}
              title="AI Consulting"
              text="Expert guidance to implement AI strategies effectively."
            />
            <Item
              active={false}
              icon={Solutions}
              title="Custom AI Solutions"
              text="Tailored AI applications designed to meet specific business challenges."
            />
            <Item
              active={false}
              icon={Analytics}
              title="Data Analytics"
              text="Comprehensive data analysis to uncover actionable insights."
            />
            <Item
              active={false}
              icon={Models}
              title="Machine Learning Models"
              text="Advanced models to optimize processes and predict outcomes."
            />
          </div>
        </section>
        <section className={Style.block}>
          <h2 className={Style.title}>AI Services</h2>
          <div className={Style.items}>
            <Item
              active={false}
              icon={Audits}
              title="SEO Audits"
              text="Comprehensive analysis of your current SEO performance."
            />
            <Item
              active={false}
              icon={Research}
              title="Keyword Research"
              text="Identifying the best keywords to target for maximum impact."
            />
            <Item
              active={false}
              icon={Seo}
              title="On-Page SEO"
              text="Optimizing individual pages to rank higher and earn more relevant traffic."
            />
            <Item
              active={false}
              icon={Building}
              title="Link Building"
              text="Developing strategies to acquire high-quality backlinks."
            />
          </div>
        </section>
        <Contact title="Get in touch" />
      </main>
      <Footer />
    </>
  );
};

export default Services;
