import React from "react";
import Header from "../../components/header/Header";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
import Banner from "../../components/banner/Banner";
import Banner_img from "../../assets/banner/about.png";
import Top from "../../components/info/Top";
import Proposition from "../../components/proposition/Proposition";
import Testimonials from "../../components/testimonials/Testimonials";

const About = () => {
  return (
    <>
      <Header />
      <main className="container">
        <Banner
          title="About US"
          text="At Cogio AI, we specialize in developing cutting-edge AI and SEO solutions tailored to your business needs. Our team of experts is dedicated to delivering innovative strategies that drive growth and success.”"
          img={Banner_img}
        />
        <Top text="Empowering organizations with innovative AI technologies and SEO strategies.”" />
        <Proposition />
        <Contact title="Get in touch" />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
};

export default About;
