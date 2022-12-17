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
      <div className=" lg:ml-[250px] sm:ml-auto ml-0    pt-[28px]  flex justify-center flex-1 ">
        <div className="w-screen lg:w-[820px] ">{children}</div>
      </div>
    </>
  );
}

export default RightSideBar;
