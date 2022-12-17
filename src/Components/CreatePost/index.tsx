import React from "react";
import { ICON, IconSolid } from "../../utils/icon";

function CreatePostModal() {
  return (
    <>
      <div className="fixed w-screen h-screen top-0 bottom-0 right-0 left-0 overflow-hidden bg-[#595959] z-[2] flex justify-center items-center">
        <div className="absolute right-0 top-0 p-3 text-white">
          <ICON icon={IconSolid.faXmark} />
        </div>
        <div className="w-[700px] h-[70%] bg-white rounded-xl">
          <div className="text-center border-b-[2px] py-3 font-medium border-[#DBDBDB]">
            <h3>Tạo bài viết mới</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreatePostModal;
