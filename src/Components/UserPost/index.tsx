import Image from "next/image";
import React from "react";
import { ICON, IconRegular, IconSolid } from "../../utils/icon";

function UserPost() {
  return (
    <>
      <>
        <div className="rounded-md border-[1px] border-[#DBDBDB] bg-white  p-3 my-10">
          <div className="h-[53px] py-2 mb-3 ">
            <div className="flex justify-between items-center">
              <div className="flex items-center ">
                <div className="circle h-[50px] w-[50px] mr-2"></div>
                <p className="font-medium">Gia Thuận</p>
              </div>
              <ICON icon={IconSolid.faEllipsis} />
            </div>
          </div>
          <div>
            {/* <Image
              className="h-[530px] w-full "
              height={530}
              width={"100"}
              alt="123"
              src="https://images.unsplash.com/photo-1670889505554-2e027664f7df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
            /> */}
            <img
              className="h-[530px] w-full "
              alt="123"
              src="https://images.unsplash.com/photo-1670889505554-2e027664f7df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
            />
          </div>
          <div className="bg-white">
            <div className="flex justify-between h-[53px] items-center ">
              <div>
                <ICON
                  className="mx-2 text-[1.3rem]"
                  icon={IconRegular.faHeart}
                />
                <ICON
                  className="mx-2 text-[1.3rem]"
                  icon={IconRegular.faComment}
                />
                <ICON
                  className="mx-2 text-[1.3rem]"
                  icon={IconSolid.faPaperPlane}
                />
              </div>
              <ICON
                className="mx-2 text-[1.3rem]"
                icon={IconRegular.faBookmark}
              />
            </div>
          </div>
          <p className="font-medium text-[1rem]">3.055.175 lượt thích</p>
          <div className="flex">
            <p className="font-medium mr-2">jennierubyjane</p>
            <p className="font-light">Kristmas in Köln 🎄</p>
          </div>
          <p className="font-light text-[0.9rem]">Xem tất cả 6.651 bình luận</p>
        </div>
      </>
    </>
  );
}

export default UserPost;
