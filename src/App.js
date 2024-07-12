import React from "react";
import "./App.css";
import Seo_img from "./assets/seo.png";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import Info from "./components/info/Info";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Banner_img from "./assets/banner/home.png";

function App() {
  return (
    <>
      <Header />

      <main>
        <Banner
          title="Revolutionizing AI and SEO Solutions for Your Business"
          img={Banner_img}
        />
        <Info />
        <section className="container">
          <img src={Seo_img} className="seo_img" alt="Seo" />
        </section>
        <Contact title="Get in touch" />
      </main>
      <Footer />
    </>
  );
}

export default App;
