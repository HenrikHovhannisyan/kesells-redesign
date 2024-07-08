import React from "react";
import Header from "../../components/header/Header";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
import Banner from "../../components/banner/Banner";
import Banner_img from "../../assets/banner/about.png";

const About = () => {
  return (
    <>
      <Header />
      <main>
        <Banner
          title="About US"
          text="At Cogio AI, we specialize in developing cutting-edge AI and SEO solutions tailored to your business needs. Our team of experts is dedicated to delivering innovative strategies that drive growth and success.”"
          img={Banner_img}
        />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default About;
