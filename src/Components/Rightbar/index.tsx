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
      <div className="ml-[250px]  bg-[#FAFAFA] pt-[28px]  flex justify-center flex-1 ">
        <div className="w-[820px] ">
          {
            children
          }
          {/* <div className="flex  h-full">
            <div
              style={{
                width: `${WidthLeft}%`,
              }}
              className={` mx-[-2px] px-[2px] bg-white h-4`}
            >
              <Stories />
              <UserPost />
              <UserPost />
              <UserPost />
              <UserPost />
            </div>
            <div
              style={{
                width: `${100 - WidthLeft}%`,
              }}
              className={`pl-2 mx-[-2px] px-[2px]  max-h-max`}
            >
              <div className="h-[53px] flex justify-between items-center">
                <div className="circle h-[50px] w-[50px] "></div>
                <div>
                  <p className="text-[0.8rem] font-medium">Name Profile</p>
                  <p className="text-[0.8rem] whitespace-nowrap">
                    Gia Thuận Nguyễn
                  </p>
                </div>
                <p className="text-base">Chuyển</p>
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

                      <p>Theo Dõi</p>
                    </div>
                  </>
                );
              })}
            </div>
          </div> */}
        </div>
        {/* <div className="  pt-[28px] rounded w-full  h-full   "></div> */}
      </div>
    </>
  );
}

export default RightSideBar;

// <div className="  pt-[28px] rounded w-full  h-full   ">
//           <div className="h-6 bg-red-300 w-2/3"></div>

//           <div className="flex  h-full">
//             <div
//               style={{
//                 width: `${WidthLeft}%`,
//               }}
//               className={` mx-[-2px] px-[2px] bg-white h-4`}
//             >
//               <Stories />
//               <UserPost />
//               <UserPost />
//               <UserPost />
//               <UserPost />
//             </div>
//             <div
//               style={{
//                 width: `${100 - WidthLeft}%`,
//               }}
//               className={`pl-2 mx-[-2px] px-[2px]  max-h-max`}
//             >
//               <div className="h-[53px] flex justify-between items-center">
//                 <div className="circle h-[50px] w-[50px] "></div>
//                 <div>
//                   <p className="text-[0.8rem] font-medium">Name Profile</p>
//                   <p className="text-[0.8rem] whitespace-nowrap">
//                     Gia Thuận Nguyễn
//                   </p>
//                 </div>
//                 <p className="text-base">Chuyển</p>
//               </div>

//               <div className="flex justify-between py-4">
//                 <p>Gợi ý cho bạn</p>
//                 <Link href={"/explore/people"}>
//                   <p>Xem tất cả</p>
//                 </Link>
//               </div>
//               {peopleSuggest.map((item, index) => {
//                 return (
//                   <>
//                     <div className="py-2 flex items-center justify-between">
//                       <div className="flex">
//                         <div className="circle h-[20px] w-[20px] mr-3 "></div>
//                         <p>{item.name}</p>
//                       </div>

//                       <p>Theo Dõi</p>
//                     </div>
//                   </>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
