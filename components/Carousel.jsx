import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper";

const Carousel = ({ items }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={0}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Autoplay]}
      className="mySwiper h-[100%] w-[100%] justify-center items-center"
    >
      {items &&
        items.map((item) => {
          return (
            <SwiperSlide
              className="mySwiper h-[100%] w-[100%] flex justify-center items-center"
              key={item}
            >
              <img src={item} className="h-[100%] w-[100%] object-cover" />
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default Carousel;
