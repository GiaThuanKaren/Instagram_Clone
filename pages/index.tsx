import Head from "next/head";
import Image from "next/image";
import React from "react"
import Link from "next/link";
import { ReactNode, useState } from "react";
import Stories from "../src/Components/Stories";
import UserPost from "../src/Components/UserPost";
import { BsPatchCheckFill } from "react-icons/bs";
import { MainLayout } from "../src/Layouts";
import { ICON, IconRegular, IconSolid } from "../src/utils/icon";
import styles from "../styles/Home.module.css";
import CreatePostModal from "../src/Components/CreatePost";
import { useSession } from "next-auth/react";

import { GetServerSideProps } from "next";
import { GetAllPost } from "../src/services/api";
import { PostWithUserModel } from "../src/Model";
import { ShowToastify } from "../src/utils";
import LoadingAnimated from "../src/Components/LoadingAnimation";
interface Props {
  children?: ReactNode;
}

export default function Home() {
  const WidthLeft = 70;
  const { data: session, status } = useSession()
  const [homePost, setHomePost] = React.useState<PostWithUserModel[]>([

  ])
  const [loading, setLoading] = React.useState(false)
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



  React.useEffect(() => {
    async function FetchApi() {
      try {
        let result = await GetAllPost();
        console.log(result.data)
        setHomePost(result.data)
      } catch (e) {
        ShowToastify("Opps , Something went wrong , Please Refresh Page")
      }
      finally {
        setLoading(false)
      }
    }
    FetchApi()
  }, [])
  return (
    <>
      {/* <Cr eatePostModal /> */}
      <MainLayout iscenterContainerLayout>
        {loading ? <LoadingAnimated /> :
          <div className="flex    h-full sm:justify-center mt-10">
            <div
              className={`w-screen sm:w-[70%]  mx-[-2px] px-[2px] bg-white h-4  `}
            >
              <Stories />
              {
                homePost.map((item: PostWithUserModel, index: number) => {
                  let user = item.user
                  // console.log("User", user)
                  console.log("Home post" ,item)
                  return <>
                    <UserPost
                      user={user}
                      
                      {...item}
                      images={
                        item.images
                      }
                    // email_verified={"123123"}
                    />
                  </>
                })
              }
            </div>
            <div
              style={{
                width: `${100 - WidthLeft}%`,
              }}
              className={`hidden lg:block pl-2 mx-[-2px] px-[2px]  max-h-max`}
            >
              <div className="h-[53px] flex justify-between items-center">
                <div className="circle h-[50px] w-[50px] overflow-hidden">
                  <img src={session?.user?.image ? session?.user?.image : ""} alt="" />
                </div>
                <div>
                  <p className="text-[0.8rem] font-medium">{session?.user?.name}</p>
                  <p className="text-[0.8rem] whitespace-nowrap font-medium text-[#ACACAC] ">
                    {session?.user?.name}
                  </p>
                </div>
                <p className="text-base font-medium text-[0.75rem] text-[#20A2F7]">
                  Chuyển
                </p>
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
                    <div className="py-2 flex items-center justify-between cursor-pointer">
                      <div className="flex items-center">
                        <div className="circle h-[20px] w-[20px] mr-3 "></div>
                        <p className="font-medium text-black">{item.name}</p>
                        {/* <FontAwesomeIcon icon="fa-sharp fa-solid fa-badge-check" /> */}
                        {/* <ICON icon={IconSolid.faCheck} /> */}
                        <BsPatchCheckFill className="ml-1 text-[#20A2F7]" />
                      </div>

                      <p className="text-[rgb(58,172,247)] font-[500] text-[0.8rem] ">
                        Theo Dõi
                      </p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        }
      </MainLayout >
      {/* <pre>
        𝐅𝐀𝐋𝐋 𝐖𝐈𝐍𝐓𝐄𝐑 𝟐𝟎𝟐𝟐 𝟎𝟒 - 𝐆𝐌 𝐒𝐓𝐔𝐃𝐈𝐎𝐒 📣 Hàng mới về Link album hàng mới :
        https://www.facebook.com/media/set/?vanity=Gossipman.Guy&set=a.3294243167491503
        👉 Đặt hàng ngay : http://m.me/gossipman.guy Gossip Man • Store : 14
        Trần Quốc Toản - Hoàn Kiếm - Hà Nội • Studios / Office : S2.02 - Vinhome
        ocean park - Hà Nội • Mua hàng : 0825968988 ( 9:00 - 21:30 ) • Khiếu nại
        dịch vụ : 0918232630 ( 24/7 ) • Facebook :
        http://www.facebook.com/gossipman.guy • Instagram :
        http://www.instagram.com/gossipman.studios Thanks for shopping with us !
      </pre> */}
    </>
  );
}


