import React, { ReactNode, useState } from "react";
import Link from "next/link";
import UserPost from "../UserPost";
import Stories from "../Stories";
interface Props {
  children?: ReactNode;
}
function RightSideBar({ children }: Props) {
  const WidthLeft = 70;
  // container  mx-auto pt-[28px] rounded  h-full  md:w-3/6
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
      {/* md:ml-[100px] lg:ml-[250px] */}
      <div className="sm:ml-[100px]  ml-0   t-[28px]   flex sm:justify-center flex-1 ">
        <div className="w-screen sm:w-[calc(100vw_-_100px)] lg:w-[820px] sm:px-0 ">
          {children}
        </div>
      </div>
    </>
  );
}

export default RightSideBar;
