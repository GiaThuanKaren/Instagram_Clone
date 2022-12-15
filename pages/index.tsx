import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ReactNode, useState } from "react";
import Stories from "../src/Components/Stories";
import UserPost from "../src/Components/UserPost";
import { MainLayout } from "../src/Layouts";
import styles from "../styles/Home.module.css";
interface Props {
  children?: ReactNode;
}
export default function Home() {
  const WidthLeft = 70;
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
      <MainLayout>
        <div className="flex  h-full">
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
        </div>
      </MainLayout>
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
