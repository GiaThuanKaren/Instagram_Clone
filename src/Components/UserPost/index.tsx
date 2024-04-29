import Image from "next/image";
import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";

import { ICON, IconRegular, IconSolid } from "../../utils/icon";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { Author, ImagePost, PostHome, PostWithUserModel } from "../../Model";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { HandleUserReact, insertNewComment } from "../../services/api";
import { ShowToastify } from "../../utils";
import ModalUserPost from "./ModalUserPost";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";




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



function UserPost({ contend, id, images, reaction, user, userId }: PostWithUserModel) {

  const [flagReact, setFlagReact] = React.useState<"REMOVE" | "INSERT">(() => {
    if (reaction.includes(user?.id as string)) {
      return "REMOVE"
    } else {
      return "INSERT"
    }
  })
  const { data, status } = useSession()
  const {
    push
  } = useRouter()
  const [numReact, setNumReact] = React.useState(reaction.length)
  const [loadingImg, setLoadingImag] = React.useState(true)
  const [text, settext] = useState<string>("");
  const [indexImg, setIndexImag] = React.useState(0)
  const InputCommentEle = useRef(null);
  const [ArrImagePost, setArrImagePost] = useState([]);
  const [opentModalPost, setOpenModalPost] = React.useState(false)
  const HeaderAnimatedRef = React.useRef<any>()
  const handleComment = async function (parententIdComment: string) {
    try {
      let dataUser: any = data?.user
      if (status == "unauthenticated") {
        push("/")
      }
      const result = await insertNewComment(dataUser.id, id as string, text, parententIdComment)
      settext("")
      ShowToastify("Thanks Your Feedback")
    } catch (error) {
      ShowToastify("Opps Something Went Wrong , Pleasy Refresh Your Page")
      throw error
    }
  }

  const handleReaction = async function () {
    try {
      let dataUser: any = data?.user
      if (status == "unauthenticated") {
        push("/")
      }
      console.log(flagReact)
      let result = await HandleUserReact(dataUser.id, id, flagReact)

      if (flagReact == "INSERT") {
        setNumReact(prev => prev + 1)

        setFlagReact("REMOVE")
      } else {
        setNumReact(prev => prev - 1)
        setFlagReact("INSERT")
      }
      ShowToastify("Thanks Your Feedback")

    } catch (error) {
      console.log(
        error
      )
      ShowToastify("Opps Something Went Wrong , Pleasy Refresh Your Page")
    }
  }

  return (

    <>
      {opentModalPost &&
        <ModalUserPost
          imageAuthor={user?.image as string}
          name={user?.name as string}
          _id={id}
          descripttion={contend}
          media={images}
          reaction={reaction}
          handleFN={setOpenModalPost}
        />
      }

      <div className=" rounded-md border-[1px] border-[#DBDBDB] bg-white  py-3 my-10 pb-0 text-black">
        <div className="h-[53px] pb-2 py-2 mb-3 px-2  ">
          <div className="flex justify-between items-center">
            <div className="flex items-center ">
              <div className="circle h-[50px] w-[50px] mr-2 overflow-hidden">
                <LazyLoadImage src={user?.image as string ? user?.image as string : "https://avatars.githubusercontent.com/u/86192249?v=4"} className="w-full h-full " />
              </div>
              <p className="font-medium">{user?.name as string}</p>
            </div>
            <ICON icon={IconSolid.faEllipsis} />
          </div>
        </div>
        <div onDoubleClick={() => {
          console.log("Double Click")
          handleReaction()
        }} className="relative">
          {
            images.length > 0 && indexImg > 0 &&
            <ICON onClick={() => {
              setIndexImag(prev => prev - 1)
            }} className="absolute left-0 top-1/2 p-3 rounded-full text-white hover:cursor-pointer bg-red-300 mx-1" icon={IconSolid.faChevronLeft} />
          }
          <LazyLoadImage
            onLoad={() => {
              console.log("Load Image DOne 1")
            }}

            className=" w-full overflow-hidden aspect-[2/3] object-contain"
            alt="123"
            // src={`https://drive.google.com/uc?id=${media[indexImg] as string}&export=download`}
            // src="https://images.unsplash.com/photo-1536195892759-c8a3c8e1945e?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            src={images[indexImg]}
          />


          {/* <div
            role="status"
            className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center"
          >
            <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded dark:bg-gray-700">
              <svg
                className="w-12 h-12 text-gray-200"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 640 512"
              >
                <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
              </svg>
            </div>
  
          </div>  */}



          {
            images.length >= 0 && indexImg < images.length - 1 &&

            <ICON onClick={() => {
              setIndexImag(prev => prev + 1)
            }} className="absolute right-0 top-1/2 p-3 rounded-full text-white hover:cursor-pointer bg-red-300 mx-1" icon={IconSolid.faChevronRight} />
          }
        </div>
        <div className="bg-white">
          <div className="flex justify-between h-[53px] items-center ">
            <div>
              {
                flagReact == "REMOVE" ?
                  <ICON
                    className="text-red-400 mx-2 text-[1.3rem]"
                    icon={IconSolid.faHeart}
                  />
                  :
                  <ICON
                    className="mx-2 text-[1.3rem]"
                    icon={IconRegular.faHeart}
                  />

              }
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
        <p className=" px-2 font-medium text-[1rem]">{numReact} lượt thích</p>

        <div className="flex  px-2 ">
          <p className="font-medium mr-2">{contend}</p>
          <p className="break-words " dangerouslySetInnerHTML={{
            __html: contend
          }} ></p>
        </div>

        <p onClick={() => {
          setOpenModalPost(true)
        }} className=" px-2 font-light text-[0.9rem] cursor-pointer">
          Xem tất cả  bình luận
        </p>
        <p className="text-[0.6rem] font-[200] py-2  px-2 ">1 GIỜ TRƯỚC</p>
        <div 
        className=" px-2 flex items-center justify-between border-t border-[#EFEFEF] py-[8px]">
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
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
              if (e.code == "Enter") {
                // console.log([InputCommentEle.current]);

                handleComment("")
                settext("")
              }
            }}
            // onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
            //   if (e.code == "Enter") {
            //     // console.log([InputCommentEle.current]);
            //     console.log("skdjhflksdhflk")
            //     // handleComment("")
            //     settext("")
            //   }
            // }}
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

  );
}

export default UserPost;
