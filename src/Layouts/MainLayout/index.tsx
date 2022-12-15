import React, { ReactNode } from "react";
import LeftSideBar from "../../Components/LeftBar";
import RightSideBar from "../../Components/Rightbar";

interface Props {
  children: ReactNode;
}

function MainLayout({ children }: Props) {
  return (
    <>
      <div className="flex min-h-screen">
        <LeftSideBar />
        <RightSideBar>{children}</RightSideBar>
      </div>
    </>
  );
}

export default MainLayout;
