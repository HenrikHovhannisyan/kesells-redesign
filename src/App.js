import React from "react";
import "./App.css";
import Seo_img from "./assets/seo.png";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import Info from "./components/info/Info";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />

      <main>
        <Banner />
        <Info />
        <section className="container">
          <img src={Seo_img} className="seo_img" alt="Seo" />
        </section>
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
