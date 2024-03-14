import React from "react";
import ReelsVideo from "../../../src/Components/Reels/videos";
import { MainLayout } from "../../../src/Layouts";

function ReelPage() {
  return (
    <MainLayout iscenterContainerLayout>
      <div className="snap-mandatory snap-y">

        <ReelsVideo />
        <ReelsVideo />
        <ReelsVideo />
      </div>
    </MainLayout>
  );
}

export default ReelPage;
