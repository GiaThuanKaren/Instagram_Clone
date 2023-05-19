import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Link from "next/link";

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
        className="mySwiper h-28 "
      >
        {arr.map((item, index) => {
          return (
            <>
              <SwiperSlide className="min-h-[70px] flex justify-center items-center mx-5">
                <Link href={`/stories/123/123`}>
                  <div className=" circle bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 h-[50px] w-[50px] overflow-hidden  ">
                    <LazyLoadImage
                      className=" circle  "
                      alt="123"
                      src="https://images.unsplash.com/photo-1670993744250-94a791464249?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                    />
                  </div>
                </Link>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </>
  );
}

export default Stories;
