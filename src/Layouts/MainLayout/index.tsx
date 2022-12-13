import React, { ReactNode } from "react";
import LeftSideBar from "../../Components/LeftBar";
import RightSideBar from "../../Components/Rightbar";

interface Props {
  children: ReactNode;
}

function MainLayout() {
  return (
    <>
      <div className="flex h-[100vh] max-h-[100vh]">
        <LeftSideBar />
        <RightSideBar />
      </div>
    </>
  );
}

export default MainLayout;
