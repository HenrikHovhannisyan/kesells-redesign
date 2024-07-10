import React from "react";
import Style from "./blog.module.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Filter from "../../components/filter/Filter";

const Blog = () => {
  return (
    <>
      <Header />
      <main className="container">
        <h2 className={Style.title}>Blog</h2>
        <Filter />
      </main>
      <Footer />
    </>
  );
};

export default Blog;
