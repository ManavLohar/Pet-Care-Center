import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import style from "./News.module.css";
import newsImg1 from "../assets/latest-news1.png";
import newsImg2 from "../assets/latest-news2.png";
import newsImg3 from "../assets/latest-news3.png";

const News = () => {
  return (
    <div className={style.news}>
      <div className={style.news_heading}>
        <h1>Read Our Latest News</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, dicta.
          Lorem ipsum dolor sit amet.
        </p>
      </div>

      <div className={style.news_content}>
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            900: {
              slidesPerView: 2,
            },
            1350: {
              slidesPerView: 3,
            },
          }}
          slidesPerView={2}
          slidesPerGroup={1}
          spaceBetween={20}
          classNamel={style.slider}
          style={{ width: "80%" }}
        >
          <SwiperSlide className={style.newsImg}>
            <div className={style.imgBox}>
              <img src={newsImg1} alt="" />
              <div className={style.newsImg_content}>
                <p>Lorem ipsum dolor sit</p>
                <p>31 May 2024</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={style.newsImg}>
            <div className={style.imgBox}>
              <img src={newsImg2} alt="" />
              <div className={style.newsImg_content}>
                <p>Lorem ipsum dolor sit</p>
                <p>31 May 2024</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={style.newsImg}>
            <div className={style.imgBox}>
              <img src={newsImg3} alt="" />
              <div className={style.newsImg_content}>
                <p>Lorem ipsum dolor sit</p>
                <p>31 May 2024</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default News;
