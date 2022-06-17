import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css/bundle";
import "./SimpleSwiper.css";

function SimpleSwiper(props) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true, dynamicBullets: true }}
      autoplay={true}
    >
      <SwiperSlide>
          <img src={props.content[0].url} alt="" />
      </SwiperSlide>

      <SwiperSlide>
          <img src={props.content[1].url} alt="" />
      </SwiperSlide>

      <SwiperSlide>
          <img src={props.content[2].url} alt="" />
      </SwiperSlide>
      
    </Swiper>
  );
}

export default SimpleSwiper;
