import React from "react";
import "./App.css";
import Seo_img from "./assets/seo.png";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import Info from "./components/info/Info";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
      <Header />

      <main>
        <Banner />
        <Info />
        <img src={Seo_img} className="seo_img" alt="Seo" />
        <Contact />
      </main>
    </>
  );
}

export default App;
