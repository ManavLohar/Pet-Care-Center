import React from "react";
import "./ClientsReview.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Reviews = () => {
  return (
    <div className="reviews">
      <Swiper
        modules={[Pagination, Navigation]}
        className="mySwiper"
        navigation={true}
        pagination={{
          dynamicsBullets: true,
        }}
        loopfillgroupwithblank="true"
        spaceBetween={50}
        slidesPerView={1}
        slidesPerGroup={1}
        loop={true} 
      >
        <SwiperSlide className="review_section">
          <h1>What Clients Say</h1>
          <p>Lorem ipsum dolor</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod nobis
            consectetur accusantium porro natus minus modi totam numquam iure,
            rem similique! Inventore totam itaque velit saepe, explicabo nemo
            culpa officiis?
          </p>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </SwiperSlide>
        <SwiperSlide className="review_section">
          <h1>What Clients Say</h1>
          <p>Lorem ipsum dolor</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod nobis
            consectetur accusantium porro natus minus modi totam numquam iure,
            rem similique! Inventore totam itaque velit saepe, explicabo nemo
            culpa officiis?
          </p>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </SwiperSlide>
        <SwiperSlide className="review_section">
          <h1>What Clients Say</h1>
          <p>Lorem ipsum dolor</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod nobis
            consectetur accusantium porro natus minus modi totam numquam iure,
            rem similique! Inventore totam itaque velit saepe, explicabo nemo
            culpa officiis?
          </p>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Reviews;
