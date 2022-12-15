import React from "react";
import { MainLayout } from "../../src/Layouts";

function PersonalProfile() {
  return (
    <>
      <MainLayout>
        <div className="h-[150px]  w-full flex justify-between">
          <div className="grow-[1]">
            <div className=" circle h-[150px] w-[150px] bg-black overflow-hidden"></div>
          </div>
          <div className="h-full grow-[3]">
            {/* Heading */}
            <div className="flex justify-between h-[32px] w-max">
              <h2>Gia Thuan</h2>
              <div className=" border-[1px] border-[#DBDBDB] px-3 mx-3">
                <p className="text-[0.8rem] font-medium">
                  Chỉnh Sửa Trang Cá Nhân{" "}
                </p>
              </div>
              <svg
                aria-label="Tùy chọn"
                className="_ab6-"
                color="#262626"
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <circle
                  cx="12"
                  cy="12"
                  fill="none"
                  r="8.635"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></circle>
                <path
                  d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096"
                  fill="none"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></path>
              </svg>
            </div>
            <div className="flex justify-between py-3 my-1">
              <p>
                <p className="inline font-medium">3</p> Bài viết
              </p>
              <p>
                <p className="inline font-medium">29</p> Người theo dõi
              </p>
              <p>
                Đang theo dõi <p className="inline font-medium">84</p> người
                dùng
              </p>
            </div>
            <h3 className="font-medium">Gia Thuận Nguyễn</h3>
            <p>Nguyễn Quang Gia Thuận </p>
          </div>
        </div>
      </MainLayout>
    </>
  );
}

export default PersonalProfile;
