import React from "react";
import style from "./Categories.module.css";
import category1 from "../assets/cat1.png";
import category2 from "../assets/cat2.png";
import category3 from "../assets/cat3.png";
import category4 from "../assets/cat4.png";
import category5 from "../assets/cat5.png";
import { Swiper, SwiperSlide } from "swiper/react";

const Categories = () => {
  return (
    <div className={style.categories}>
      <div className={style.categories_heading}>
        <h1>Categories</h1>
        <p>Shop For Your Pet</p>
      </div>
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          650: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
        spaceBetween={10}
        // slidesPerView={2}
        slidesPerGroup={1}
        className={style.categories_items}
      >
        <SwiperSlide className={style.item}>
          <img src={category1} alt="" />
          <p>Cat Food</p>
        </SwiperSlide>
        <SwiperSlide className={style.item}>
          <img src={category2} alt="" />
          <p>Dog Toys</p>
        </SwiperSlide>
        <SwiperSlide className={style.item}>
          <img src={category3} alt="" />
          <p>Cat Food</p>
        </SwiperSlide>
        <SwiperSlide className={style.item}>
          <img src={category4} alt="" />
          <p>Dog House</p>
        </SwiperSlide>
        <SwiperSlide className={style.item}>
          <img src={category5} alt="" />
          <p>Dog Food</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Categories;
