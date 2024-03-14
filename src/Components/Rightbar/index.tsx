import React, { ReactNode, useState } from "react";
import Link from "next/link";
import UserPost from "../UserPost";
import Stories from "../Stories";
interface Props {
  children?: ReactNode;
  iscenterContainerLayout?: true | boolean
}
function RightSideBar({ children, iscenterContainerLayout }: Props) {
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
      {/* sm:ml-[0px] md:ml-[180px]  */}
      <div className={" ml-0  md:ml-[100px]   " + `${iscenterContainerLayout && "flex-1 flex sm:justify-center"}`}>
        <div className="w-screen sm:w-[calc(100vw_-_100px)] lg:w-[820px] sm:px-0 mt-10  ">
          {children}
        </div>
      </div>
    </>
  );
}

export default RightSideBar;
