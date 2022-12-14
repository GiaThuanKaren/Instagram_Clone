import React, { useState } from "react";
import Link from "next/link";
import UserPost from "../UserPost";
import Stories from "../Stories";
function RightSideBar() {
  const WidthLeft = 70;

  const [peopleSuggest, setpeopleSuggest] = useState([
    {
      name: "Thuan",
      avatarLink: "",
    },
    {
      name: "Thuan",
      avatarLink: "",
    },
    {
      name: "Thuan",
      avatarLink: "",
    },
    {
      name: "Thuan",
      avatarLink: "",
    },
    {
      name: "Thuan",
      avatarLink: "",
    },
  ]);
  return (
    <>
      <div className="ml-[250px] h-fit  flex-1 bg-[#FAFAFA] ">
        <div className="container  mx-auto pt-[28px] rounded  h-full w-2/3 md:w-3/6 ">
          <div className="flex h-full">
            <div
              style={{
                width: `${WidthLeft}%`,
              }}
              className={`min-h-[10vh] mx-[-2px] px-[2px] bg-white h-4`}
            >
              <Stories />
              <UserPost />
              <UserPost />
              <UserPost />
              <UserPost />
            </div>
            <div
              style={{
                width: `${100 - WidthLeft}%`,
              }}
              className={`pl-2 mx-[-2px] px-[2px]  max-h-max`}
            >
              <div className="h-[53px] flex justify-between items-center">
                <div className="circle h-[50px] w-[50px] "></div>
                <div>
                  <p className="text-[0.8rem] font-medium">Name Profile</p>
                  <p className="text-[0.8rem] whitespace-nowrap">
                    Gia Thuận Nguyễn
                  </p>
                </div>
                <p className="text-base">Chuyển</p>
              </div>

              <div className="flex justify-between py-4">
                <p>Gợi ý cho bạn</p>
                <Link href={"/explore/people"}>
                  <p>Xem tất cả</p>
                </Link>
              </div>
              {peopleSuggest.map((item, index) => {
                return (
                  <>
                    <div className="py-2 flex items-center justify-between">
                      <div className="flex">
                        <div className="circle h-[20px] w-[20px] mr-3 "></div>
                        <p>{item.name}</p>
                      </div>

                      <p>Theo Dõi</p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RightSideBar;
