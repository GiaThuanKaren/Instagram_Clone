import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { ICON, IconSolid } from "../../utils/icon";

function Stories() {
  const { data, status } = useSession()

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
        slidesPerView={7}
        spaceBetween={5}
        slidesPerGroup={4}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper h-28 "
      >
        <SwiperSlide className="min-h-[70px] flex justify-center items-center mx-5 hover:cursor-pointer ">
          <div>
            <div className=" circle border-[5px] border-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 h-[50px] w-[50px]   relative hover:shadow-md transition-all">
              <ICON icon={IconSolid.faPlus} className="z-[10] absolute bottom-0 right-0 translate-x-[50%] translate-y-[50%] bg-blue-400 p-1 text-white rounded-full" />
              <LazyLoadImage
                className=" circle  "
                alt="123"
                src={data?.user && data?.user?.image as string}
              />
            </div>
            <p className="text-center  text-xs">sfdkjl</p>
          </div>

        </SwiperSlide>
        {arr.map((item, index) => {
          return (
            <>
              <SwiperSlide key={index} className="min-h-[70px] flex justify-center items-center mx-5">
                <Link href={`/stories/123/123`}>
                  <div className=" circle border-[5px] border-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 h-[50px] w-[50px] overflow-hidden  ">
                    {/* <LazyLoadImage
                      className=" circle  "
                      alt="123"
                      src="https://images.unsplash.com/photo-1670993744250-94a791464249?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                    /> */}
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
