import React, { useState } from "react";
import { MainLayout } from "../../src/Layouts";
import { ICON, IconRegular, IconSolid } from "../../src/utils/icon";

interface NavItemType {
  text: string;
  icon: JSX.Element;
}

interface ListPostType {
  type: string;
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

const ListUserPost = function ({ ArrImagePost = [] }: any) {
  return (
    <>
      <div className="flex ">
        {ArrImagePost.map((item: any, index: number) => {
          return (
            <>
              <div className="relative min-h-[287px] w-[calc(278px] m-1 bg-purple-600">
                <img
                  className=" w-full overflow-hidden aspect-[2/3] object-cover"
                  alt="123"
                  src="https://images.unsplash.com/photo-1670993744250-94a791464249?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
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
                    <title>Quay vòng</title>
                    <path d="M34.8 29.7V11c0-2.9-2.3-5.2-5.2-5.2H11c-2.9 0-5.2 2.3-5.2 5.2v18.7c0 2.9 2.3 5.2 5.2 5.2h18.7c2.8-.1 5.1-2.4 5.1-5.2zM39.2 15v16.1c0 4.5-3.7 8.2-8.2 8.2H14.9c-.6 0-.9.7-.5 1.1 1 1.1 2.4 1.8 4.1 1.8h13.4c5.7 0 10.3-4.6 10.3-10.3V18.5c0-1.6-.7-3.1-1.8-4.1-.5-.4-1.2 0-1.2.6z"></path>
                  </svg>
                </div>

                <div className="absolute w-full h-full top-0 left-0 right-0 bottom-0 bg-[#0000009e] flex items-center justify-center">
                  <div className="w-full h-4 bg-red-500 flex items-center justify-center text-white">
                    <ICON icon={IconSolid.faHeart} />
                    <ICON icon={IconSolid.faComment} />
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

  return (
    <>
      <MainLayout>
        <div className="h-[150px] mb-3  w-full flex justify-between">
          <div className="grow-[1]">
            <div className=" circle h-[150px] w-[150px] bg-black overflow-hidden"></div>
          </div>
          <div className="h-full grow-[3]">
            {/* Heading */}
            <div className="flex justify-between h-[32px] w-max">
              <h2>Gia Thuan</h2>
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
            <div className="flex justify-between py-3 my-1">
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
            <h3 className="font-medium">Gia Thuận Nguyễn</h3>
            <p>Nguyễn Quang Gia Thuận </p>
          </div>
        </div>

        <div className="flex min-h-[130px] items-center my-3 ">
          <div className="text-center mr-6">
            <div className="circle h-[90px] w-[90px] mb-2"></div>
            <p>Hug ??</p>
          </div>
          <div className="text-center ">
            <div className="rounded-[50%] h-[90px] w-[90px] mb-2 border-[4px] flex justify-center items-center text-[2rem]">
              <ICON icon={IconSolid.faPlus} />
            </div>
            <p>Tạo</p>
          </div>
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
                    className={`mr-[60px] ${
                      index == indexActive
                        ? "border-t-black border-t-[2px]"
                        : ""
                    } flex items-center`}
                  >
                    {item.icon}
                    <h3 className="px-2 mr-1">{item.text} </h3>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        <ListUserPost ArrImagePost={[1, 2, 3, 4]} />
      </MainLayout>
    </>
  );
}

export default PersonalProfile;
