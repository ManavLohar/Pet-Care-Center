import React from "react";
import style from "./Services.module.css";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";
import { Swiper, SwiperSlide } from "swiper/react";

const Services = () => {

  const swiperSlideCss = {
    display: "flex",
    justifyContent: "center",
  }

  return (
    <div id="Services" className={style.services}>
      <div className={style.servicesHeading}>
        <h1>Our Services</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
          eveniet adipisicing elit.
        </p>
      </div>
      <Swiper
        breakpoints={{
          0:{
            slidesPerView: 1,
          },
          550:{
            slidesPerView: 2
          },
          850:{
            slidesPerView: 3,
          },
          1200:{
            slidesPerView: 4,
          }
        }}
        slidesPerGroup={1}
        slidesPerView={4}
        spaceBetween={10}
        className={style.servicesCards}
      >
        <SwiperSlide style={swiperSlideCss}>
          <div className={style.card}>
            <img src={service1} alt="" />
            <p>Pet Boarding</p>
          </div>
        </SwiperSlide>
        <SwiperSlide style={swiperSlideCss}>
          <div className={style.card}>
            <img src={service2} alt="" />
            <p>Pet Spa and Grooming</p>
            {/* <img src="" alt="" /> */}
          </div>
        </SwiperSlide>
        <SwiperSlide style={swiperSlideCss}>
          <div className={style.card}>
            <img src={service3} alt="" />
            <p>Healthy Meals</p>
          </div>
        </SwiperSlide>
        <SwiperSlide style={swiperSlideCss}>
          <div className={style.card}>
            <img src={service4} alt="" />
            <p>Activity Exercise</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Services;
