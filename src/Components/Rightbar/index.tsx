import React, { useState } from "react";
import Link from "next/link";
function RightSideBar() {
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
      <div className=" h-full flex-1 bg-red-200">
        <div className="container mx-auto pt-[28px] rounded overflow-hidden h-full w-2/3 md:w-3/6 ">
          <div className="flex">
            <div className="flex-[3] mx-[-2px] px-[2px] bg-slate-50 h-4"></div>
            <div className="pl-2 flex-[2] mx-[-2px] px-[2px] bg-slate-400 max-h-max">
              <div className="h-[53px] flex justify-between items-center">
                <div className="circle h-[53px] w-[53px] "></div>
                <div>
                  <p className=" font-medium">Name Profile</p>
                  <p>Gia Thuận Nguyễn</p>
                </div>
                <div>Chuyển</div>
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

                      <div>Theo Dõi</div>
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
