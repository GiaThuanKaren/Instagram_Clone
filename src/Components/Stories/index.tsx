import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import Slider from "react-slick";
function Stories() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        slidesPerGroup={4}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {arr.map((item, index) => {
          return (
            <>
              <SwiperSlide className="min-h-[70px]">
                <div className="circle h-[50px] w-[50px] "></div>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </>
  );
}

export default Stories;
