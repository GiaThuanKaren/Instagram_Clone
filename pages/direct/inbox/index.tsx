import React from "react";
import { MainLayout } from "../../../src/Layouts";
import Pusher from "pusher-js";
import { useSession } from "next-auth/react";
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from "next/router";
interface MessageInboxInf {
  fromId: string,
  toId: string,
  msg: string
}
export function MessageInbox(
  {
    fromId,
    msg,
    toId
  }: MessageInboxInf
) {
  console.log(
    parseInt(fromId) % 2
  )
  return <>
    <div className={" w-full h-fit flex  " + fromId + "_" + toId} >
      <div className={"px-4 basis-1/2  bg-gray-400 text-white text-left"}>
        <p className="">
          Hello  Message from {msg}

        </p>
      </div>
      <div className={"px-4 basis-1/2  bg-gray-400 text-white text-right"}>
        <p className="">
          Hello  Message from {msg}

        </p>
      </div>



    </div>

  </>
}


function InboxPage() {
  const { data, status } = useSession()
  const {
    push
  } = useRouter()
  React.useEffect(() => {
    if (status == "authenticated") {
      let datauser: any = data.user
      let idUser = datauser.id
      console.log(idUser)
      var pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY as string, {
        cluster: 'ap1'
      });
      var channel = pusher.subscribe('chat');
      channel.bind(idUser, function (data: any) {
        alert(JSON.stringify(data));
      });

      // channel.bind('my-event1', function (data: any) {
      //   alert(JSON.stringify(data) + "123123");
      // });
      return () => {
        pusher.unsubscribe("chat");
      };
    }

  }, [status])

  // var pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY as string, {
  //   cluster: 'ap1'
  // });
  // var channel = pusher.subscribe('chat');
  // channel.bind('my-event', function (data: any) {
  //   alert(JSON.stringify(data));
  // });

  // channel.bind('my-event1', function (data: any) {
  //   alert(JSON.stringify(data) + "123123");
  // });
  return (
    <>
      <MainLayout hideLeftSideBar>
        <div className="h-screen w-full  flex px-2">

          <div className="basis-1/3 h-full overflow-y-auto">



            <div onClick={()=>{
              push(`/direct/inbox/${uuidv4()}`)
            }} className="h-[72px] w-full mb-2 bg-gray-400 flex items-center px-2 py-1">
              <div className="h-14 w-14  bg-red-400 rounded-full">

              </div>
              <div className="ml-2 ">
                <p className="font-medium text-white ">Gia Thuan </p>
                <p>Gia Thuan Test 1</p>
              </div>
            </div>
            {/* 

            <div className="h-[72px] w-full mb-2 bg-gray-400 flex items-center px-2 py-1">
              <div className="h-14 w-14  bg-red-400 rounded-full">

              </div>
              <div className="ml-2 ">
                <p className="font-medium text-white ">Gia Thuan </p>
                <p>Gia Thuan Test 2</p>
              </div>
            </div> */}



            {/* {
              Array.from(Array(100).keys()).map(() => {
                return <>
                  <div className="h-[72px] w-full mb-2 bg-gray-400 flex items-center px-2 py-1">
                    <div className="h-14 w-14  bg-red-400 rounded-full">

                    </div>
                    <div className="ml-2 ">
                      <p className="font-medium text-white ">Gia Thuan </p>
                      <p>Gia Thuan </p>
                    </div>
                  </div>
                </>
              })
            } */}


          </div>
          <div className="basis-2/3 h-screen  relative w-full" >

            {/* <div className="overflow-y-auto h-full">
              {
                Array.from(Array(100).keys()).map((item, index) => {
                  return <>
                    <MessageInbox toId={index.toString()} fromId={index.toString()} msg={item.toString()} />

                  </>
                })
              }


            </div>
            <div className="absolute bottom-0 left-0 right-0 px-2 flex items-center justify-between border-t border-[#EFEFEF] py-[8px]">
              <div>
                <svg
                  aria-label="Biểu tượng cảm xúc"
                  className="_ab6-"
                  color="#262626"
                  fill="#262626"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path>
                </svg>
              </div>
              <input
                // value={text}
                // onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                //   settext(e.target.value);
                // }}
                // onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                //   if (e.code == "Enter") {
                //     // console.log([InputCommentEle.current]);

                //     handleComment("")
                //     settext("")
                //   }
                // }}
                // onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
                //   if (e.code == "Enter") {
                //     // console.log([InputCommentEle.current]);
                //     console.log("skdjhflksdhflk")
                //     // handleComment("")
                //     settext("")
                //   }
                // }}
                // ref={InputCommentEle}
                type="text"
                className="bg-transparent flex-1 px-3 outline-none break-words "
                placeholder="Thêm bình luận"
              />
              <p
                className={`font-medium ${true == "" ? "text-[#B6DCFF]" : "text-[#0396F6]"
                  }  `}
              >
                Đăng
              </p>
            </div> */}
          </div>
        </div>
      </MainLayout>
    </>
  );
}

export default InboxPage;
