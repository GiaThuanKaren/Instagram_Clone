import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ModalPost from "../../../src/Components/ModalPost";
import { MainLayout } from "../../../src/Layouts";
import { ICON, IconRegular, IconSolid } from "../../../src/utils/icon";
import { getAllPostByUser } from "../../../src/services/api";

interface NavItemType {
  text: string;
  icon: JSX.Element;
}

interface ListPostType {
  type: string;
}

interface ListUserPost {
  _id: string
  title: string
  descripttion: string
  media: string[]
  reaction: any[]
  authorid: string
  createdAt: string
  updatedAt: string
  __v: number
}



const NavItems: NavItemType[] = [
  {
    text: "BÀI VIẾT",
    icon: (
      <svg
        aria-label=""
        className="_ab6-"
        color="#262626"
        fill="#262626"
        height="12"
        role="img"
        viewBox="0 0 24 24"
        width="12"
      >
        <rect
          fill="none"
          height="18"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          width="18"
          x="3"
          y="3"
        ></rect>
        <line
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          x1="9.015"
          x2="9.015"
          y1="3"
          y2="21"
        ></line>
        <line
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          x1="14.985"
          x2="14.985"
          y1="3"
          y2="21"
        ></line>
        <line
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          x1="21"
          x2="3"
          y1="9.015"
          y2="9.015"
        ></line>
        <line
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          x1="21"
          x2="3"
          y1="14.985"
          y2="14.985"
        ></line>
      </svg>
    ),
  },
  {
    text: "ĐÃ LƯU",
    icon: (
      <svg
        aria-label=""
        className="_ab6-"
        color="#262626"
        fill="#262626"
        height="12"
        role="img"
        viewBox="0 0 24 24"
        width="12"
      >
        <polygon
          fill="none"
          points="20 21 12 13.44 4 21 4 3 20 3 20 21"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        ></polygon>
      </svg>
    ),
  },
  {
    text: "ĐƯỢC GẮN THẺ",
    icon: (
      <svg
        aria-label=""
        className="_ab6-"
        color="#8e8e8e"
        fill="#8e8e8e"
        height="12"
        role="img"
        viewBox="0 0 24 24"
        width="12"
      >
        <path
          d="M10.201 3.797 12 1.997l1.799 1.8a1.59 1.59 0 0 0 1.124.465h5.259A1.818 1.818 0 0 1 22 6.08v14.104a1.818 1.818 0 0 1-1.818 1.818H3.818A1.818 1.818 0 0 1 2 20.184V6.08a1.818 1.818 0 0 1 1.818-1.818h5.26a1.59 1.59 0 0 0 1.123-.465Z"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        ></path>
        <path
          d="M18.598 22.002V21.4a3.949 3.949 0 0 0-3.948-3.949H9.495A3.949 3.949 0 0 0 5.546 21.4v.603"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        ></path>
        <circle
          cx="12.072"
          cy="11.075"
          fill="none"
          r="3.556"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        ></circle>
      </svg>
    ),
  },
];

interface ListUserPostFCInf {
  data: ListUserPost[]
}


const ListUserPost = function ({ data }: ListUserPostFCInf) {

  React.useEffect(() => {

  }, [])
  return (
    <>
      {/* <ModalPost /> */}
      <div className="flex flex-wrap ">
        {data.map((item: ListUserPost, index: number) => {
          return (
            <>
              <div className="relative min-h-[100px]  basis-1/3 my-1  p-2">
                <div className="relative">
                  <LazyLoadImage
                    className=" w-full overflow-hidden aspect-[2/3] object-cover"
                    alt="123"
                    src={`https://drive.google.com/uc?id=${item.media[0] as string}&export=download`}

                  />

                  <div className="absolute right-0 top-0 pt-1 pr-1  ">
                    <svg
                      aria-label="Quay vòng"
                      className="x1lliihq x1n2onr6 x1hfr7tm"
                      color="#ffffff"
                      fill="#ffffff"
                      height="24"
                      role="img"
                      viewBox="0 0 48 48"
                      width="24"
                    >
                      <path d="M34.8 29.7V11c0-2.9-2.3-5.2-5.2-5.2H11c-2.9 0-5.2 2.3-5.2 5.2v18.7c0 2.9 2.3 5.2 5.2 5.2h18.7c2.8-.1 5.1-2.4 5.1-5.2zM39.2 15v16.1c0 4.5-3.7 8.2-8.2 8.2H14.9c-.6 0-.9.7-.5 1.1 1 1.1 2.4 1.8 4.1 1.8h13.4c5.7 0 10.3-4.6 10.3-10.3V18.5c0-1.6-.7-3.1-1.8-4.1-.5-.4-1.2 0-1.2.6z"></path>
                    </svg>
                  </div>

                  <div className="absolute w-full h-full top-0 left-0 right-0 bottom-0 bg-[#0000009e] flex items-center justify-center">
                    <div className="w-full h-4  flex items-center justify-center text-white">
                      <div className="flex items-center mx-0 sm:mx-5">
                        <ICON
                          icon={IconSolid.faHeart}
                          className="icon-cog mx-3 "
                        />
                        <p className="text-white font-medium">20</p>
                      </div>
                      <div className="flex items-center mx-0 sm:mx-5">
                        <ICON className="mx-3" icon={IconSolid.faComment} />
                        <p className="text-white font-medium">20</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

function PersonalProfile() {
  const [indexActive, setindexActive] = useState<number>(0);
  const { data: session, status } = useSession()
  const [userPost, setUserPost] = React.useState<ListUserPost[]>([])
  React.useEffect(() => {
    async function FetchApi() {
      try {
        let result = await getAllPostByUser();
        setUserPost(result.data)
        console.log(result)
      } catch (error) {
        throw error
      }
    }
    FetchApi()
  }, [])
  return (
    <>
      <MainLayout>
        <div className="h-[90px] sm:h-[150px] mb-3  w-full flex justify-between  sm:px-0">
          <div className="grow-[1]">
            <div className=" circle h-[70px] w-[70px]  md:h-[150px] md:w-[150px]  overflow-hidden">
              <LazyLoadImage
                className="w-full h-ful"
                src={session?.user?.image ? session?.user?.image : "https://avatars.githubusercontent.com/u/86192249?v=4"}
              />
            </div>
          </div>
          <div className="h-full grow-[3]">
            {/* Heading */}
            <div className="flex justify-between h-[32px] w-max ">
              <h2>{session?.user?.name}</h2>
              <div className=" border-[1px] border-[#DBDBDB] px-3 mx-3">
                <p className="text-[0.8rem] font-medium">
                  Chỉnh Sửa Trang Cá Nhân{" "}
                </p>
              </div>
              <svg
                aria-label="Tùy chọn"
                className="_ab6-"
                color="#262626"
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <circle
                  cx="12"
                  cy="12"
                  fill="none"
                  r="8.635"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></circle>
                <path
                  d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096"
                  fill="none"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></path>
              </svg>
            </div>
            <div className="hidden md:flex justify-between py-3 my-1">
              <p>
                <p className="inline font-medium">3</p> Bài viết
              </p>
              <p>
                <p className="inline font-medium">29</p> Người theo dõi
              </p>
              <p>
                Đang theo dõi <p className="inline font-medium">84</p> người
                dùng
              </p>
            </div>
            <h3 className="font-medium">{session?.user?.name}</h3>
            <p>{session?.user?.name}</p>
          </div>
        </div>

        <div className="flex min-h-[130px] items-center my-3 px-4 sm:px-0">
          <div className="text-center mr-6">
            <div className="circle overflow-hidden h-[50px] w-[50px]  md:h-[80px] md:w-[80px] mb-2">
              <LazyLoadImage
                src="https://avatars.githubusercontent.com/u/86192249?v=4"
                className="h-full w-full overflow-hidden"
              />
            </div>
            <p className="text-xs font-medium">Hug ??</p>
          </div>
          <div className="text-center ">
            <div className="circle h-[50px] w-[50px]  md:h-[80px] md:w-[80px] mb-2 border-[4px] flex justify-center items-center text-[2rem]">
              <ICON icon={IconSolid.faPlus} />
            </div>
            <p className="text-xs font-medium">Tạo</p>
          </div>
        </div>

        <div className="flex md:hidden justify-between py-3 my-1 px-3">
          <p className="text-xs">
            <p className=" text-center font-medium">3</p> Bài viết
          </p>
          <p className="text-xs">
            <p className=" text-center font-medium">29</p> Người theo dõi
          </p>
          <p className="text-xs">
            Đang theo dõi <p className=" text-center font-medium">84</p> người
            dùng
          </p>
        </div>

        <div className="border-t-[2px] mt-2 flex justify-center items-center ">
          <div className="flex items-center">
            {NavItems.map((item: NavItemType, index: number) => {
              return (
                <>
                  <div
                    onClick={() => {
                      setindexActive(index);
                    }}
                    className={`mr-[60px] ${index == indexActive
                      ? "border-t-black border-t-[2px]"
                      : ""
                      } flex items-center`}
                  >
                    <p className="text-xl">{item.icon}</p>

                    <h3 className="px-2 mr-1 hidden sm:block ">{item.text}</h3>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        <ListUserPost data={userPost} />
      </MainLayout>
    </>
  );
}

export default PersonalProfile;
