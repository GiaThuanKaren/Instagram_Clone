import Image from "next/image";
import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";

import { ICON, IconRegular, IconSolid } from "../../utils/icon";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { Author, ImagePost, PostHome } from "../../Model";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface PropsUserPost extends Author {
  reaction: string[]
  media: string[]
  descripttion:string 
}



const ListImagePost = function ({ ArrImagePost }: any) {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {ArrImagePost.map((item: any, index: number) => {
          return (
            <>
              <SwiperSlide>
                <img
                  className="h-[530px] w-full overflow-hidden object-contain  "
                  alt="123"
                  src={
                    item.url
                      ? item.url
                      : "https://images.unsplash.com/photo-1670889505554-2e027664f7df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                  }
                />
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </>
  );
};



function UserPost({ name, image, reaction, _id, media = [] ,descripttion="<p>default</p>"}: PropsUserPost) {


  const [text, settext] = useState<string>("");
  const [indexImg, setIndexImag] = React.useState(0)
  const InputCommentEle = useRef(null);

  const [ArrImagePost, setArrImagePost] = useState([]);
  return (
    <>
      <>
        <div className=" rounded-md border-[1px] border-[#DBDBDB] bg-white  py-3 my-10 pb-0 text-black">
          <div className="h-[53px] pb-2 py-2 mb-3 px-2  ">
            <div className="flex justify-between items-center">
              <div className="flex items-center ">
                <div className="circle h-[50px] w-[50px] mr-2 overflow-hidden">
                  <LazyLoadImage src={image ? image : "https://avatars.githubusercontent.com/u/86192249?v=4"} className="w-full h-full " />
                </div>
                <p className="font-medium">{name}</p>
              </div>
              <ICON icon={IconSolid.faEllipsis} />
            </div>
          </div>
          <div onDoubleClick={() => {
            console.log("Double Click")
          }} className="relative">
            {
              media.length > 0 && indexImg > 0 &&
              <ICON onClick={() => {
                setIndexImag(prev => prev - 1)
              }} className="absolute left-0 top-1/2 p-3 rounded-full text-white hover:cursor-pointer bg-red-300 mx-1" icon={IconSolid.faChevronLeft} />
            }
            <img
              className=" w-full overflow-hidden aspect-[2/3] object-contain"
              alt="123"
              src={`https://drive.google.com/uc?id=${media[indexImg] as string}&export=download`}
            />

            {
              media.length >= 0 && indexImg < media.length &&

              <ICON onClick={() => {
                setIndexImag(prev => prev + 1)
              }} className="absolute right-0 top-1/2 p-3 rounded-full text-white hover:cursor-pointer bg-red-300 mx-1" icon={IconSolid.faChevronRight} />
            }
          </div>
          <div className="bg-white">
            <div className="flex justify-between h-[53px] items-center ">
              <div>
                <ICON
                  className="mx-2 text-[1.3rem]"
                  icon={IconRegular.faHeart}
                />
                <ICON
                  className="mx-2 text-[1.3rem]"
                  icon={IconRegular.faComment}
                />
                <ICON
                  className="mx-2 text-[1.3rem]"
                  icon={IconRegular.faPaperPlane}
                />
              </div>
              <ICON
                className="mx-2 text-[1.3rem]"
                icon={IconRegular.faBookmark}
              />
            </div>
          </div>
          <p className=" px-2 font-medium text-[1rem]">{reaction ? reaction.length : 0} lượt thích</p>

          <div className="flex  px-2 ">
            <p className="font-medium mr-2">{name}</p>
            <p className="break-words " dangerouslySetInnerHTML={{
              __html:descripttion
            }} ></p>
          </div>

          <p className=" px-2 font-light text-[0.9rem] cursor-pointer">
            Xem tất cả 6.651 bình luận
          </p>
          <p className="text-[0.6rem] font-[200] py-2  px-2 ">1 GIỜ TRƯỚC</p>
          <div className=" px-2 flex items-center justify-between border-t border-[#EFEFEF] py-[8px]">
            <div>
              <svg
                aria-label="Biểu tượng cảm xúc"
                className="_ab6-"
                color="#262626"
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path>
              </svg>
            </div>
            <input
              value={text}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                settext(e.target.value);
              }}
              onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
                if (e.code == "Enter") {
                  console.log([InputCommentEle.current]);
                }
              }}
              ref={InputCommentEle}
              type="text"
              className="bg-transparent flex-1 px-3 outline-none break-words "
              placeholder="Thêm bình luận"
            />
            <p
              className={`font-medium ${text === "" ? "text-[#B6DCFF]" : "text-[#0396F6]"
                }  `}
            >
              Đăng
            </p>
          </div>
        </div>
      </>
    </>
  );
}

export default UserPost;
