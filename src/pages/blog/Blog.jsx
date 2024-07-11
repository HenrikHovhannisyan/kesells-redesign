import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Style from "./blog.module.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Filter from "../../components/filter/Filter";
import Item from "./Item";
import img_1 from "../../assets/blog/1.png";
import img_2 from "../../assets/blog/2.png";
import img_3 from "../../assets/blog/3.png";
import img_4 from "../../assets/blog/4.png";
import img_5 from "../../assets/blog/5.png";
import img_6 from "../../assets/blog/6.png";
import img_7 from "../../assets/blog/7.png";
import img_8 from "../../assets/blog/8.png";
import img_9 from "../../assets/blog/9.png";
import img_10 from "../../assets/blog/10.png";
import img_11 from "../../assets/blog/11.png";

const Blog = () => {
  return (
    <>
      <Header />
      <main className="container">
        <h2 className={Style.title}>Blog</h2>
        <Filter />
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          loop={true}
          className={Style.slider}
          breakpoints={{
            576: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
          }}
        >
          <SwiperSlide>
            <Item
              img={img_1}
              title={"What is Lorem Ipsum?"}
              text={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
              }
              type={"Operations"}
              date={"24 Mar 2024"}
              read={"5 min read"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              img={img_2}
              title={"What is Lorem Ipsum?"}
              text={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
              }
              type={"Operations"}
              date={"24 Mar 2024"}
              read={"5 min read"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              img={img_1}
              title={"What is Lorem Ipsum?"}
              text={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
              }
              type={"Operations"}
              date={"24 Mar 2024"}
              read={"5 min read"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              img={img_2}
              title={"What is Lorem Ipsum?"}
              text={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
              }
              type={"Operations"}
              date={"24 Mar 2024"}
              read={"5 min read"}
            />
          </SwiperSlide>
        </Swiper>
        <section className={Style.block}>
          <h3 className={Style.block_title}>
            5 Ways AI is Transforming Business Operations
          </h3>
          <div className={Style.block_container}>
            <Item
              img={img_3}
              title={"What is Lorem Ipsum?"}
              text={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
              }
              type={"Operations"}
              date={"24 Mar 2024"}
              read={"5 min read"}
            />
            <Item
              img={img_4}
              title={"What is Lorem Ipsum?"}
              text={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
              }
              type={"Operations"}
              date={"24 Mar 2024"}
              read={"5 min read"}
            />
            <Item
              img={img_5}
              title={"What is Lorem Ipsum?"}
              text={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
              }
              type={"Operations"}
              date={"24 Mar 2024"}
              read={"5 min read"}
            />
          </div>
        </section>
        <section className={Style.block}>
          <h3 className={Style.block_title}>Top SEO Strategies for 2024</h3>
          <div className={Style.block_container}>
            <Item
              img={img_6}
              title={"What is Lorem Ipsum?"}
              text={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
              }
              type={"Operations"}
              date={"24 Mar 2024"}
              read={"5 min read"}
            />
            <Item
              img={img_7}
              title={"What is Lorem Ipsum?"}
              text={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
              }
              type={"Operations"}
              date={"24 Mar 2024"}
              read={"5 min read"}
            />
            <Item
              img={img_8}
              title={"What is Lorem Ipsum?"}
              text={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
              }
              type={"Operations"}
              date={"24 Mar 2024"}
              read={"5 min read"}
            />
          </div>
        </section>
        <section className={Style.block}>
          <h3 className={Style.block_title}>
            5 Ways AI is Transforming Business Operations
          </h3>
          <div className={Style.block_container}>
            <Item
              img={img_9}
              title={"What is Lorem Ipsum?"}
              text={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
              }
              type={"Operations"}
              date={"24 Mar 2024"}
              read={"5 min read"}
            />
            <Item
              img={img_10}
              title={"What is Lorem Ipsum?"}
              text={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
              }
              type={"Operations"}
              date={"24 Mar 2024"}
              read={"5 min read"}
            />
            <Item
              img={img_11}
              title={"What is Lorem Ipsum?"}
              text={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
              }
              type={"Operations"}
              date={"24 Mar 2024"}
              read={"5 min read"}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
