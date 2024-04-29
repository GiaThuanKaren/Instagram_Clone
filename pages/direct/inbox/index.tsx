import React from "react";
import { MainLayout } from "../../../src/Layouts";
import Pusher from "pusher-js";
import { useSession } from "next-auth/react";
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from "next/router";
import InboxLayout from "../../../src/Layouts/InboxLayout";
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

        <InboxLayout>
          <div className='w-full flex items-center justify-center h-full '>
            <div className="text-center flex flex-col items-center">
              <svg
                className="x1lliihq x1n2onr6 x5n08af text-center" 
                fill="currentColor"
                height={96}
                viewBox="0 0 96 96"
                width={96}
                // {...props}
              >
                <path d="M48 0C21.532 0 0 21.533 0 48s21.532 48 48 48 48-21.532 48-48S74.468 0 48 0zm0 94C22.636 94 2 73.364 2 48S22.636 2 48 2s46 20.636 46 46-20.636 46-46 46zm12.227-53.284l-7.257 5.507c-.49.37-1.166.375-1.661.005l-5.373-4.031a3.453 3.453 0 00-4.989.921l-6.756 10.718c-.653 1.027.615 2.189 1.582 1.453l7.257-5.507a1.382 1.382 0 011.661-.005l5.373 4.031a3.453 3.453 0 004.989-.92l6.756-10.719c.653-1.027-.615-2.189-1.582-1.453zM48 25c-12.958 0-23 9.492-23 22.31 0 6.706 2.749 12.5 7.224 16.503.375.338.602.806.62 1.31l.125 4.091a1.845 1.845 0 002.582 1.629l4.563-2.013a1.844 1.844 0 011.227-.093c2.096.579 4.331.884 6.659.884 12.958 0 23-9.491 23-22.31S60.958 25 48 25zm0 42.621c-2.114 0-4.175-.273-6.133-.813a3.834 3.834 0 00-2.56.192l-4.346 1.917-.118-3.867a3.833 3.833 0 00-1.286-2.727C29.33 58.54 27 53.209 27 47.31 27 35.73 36.028 27 48 27s21 8.73 21 20.31-9.028 20.31-21 20.31z" />
              </svg>
              <h3 className="font-medium">
                Your Messages
              </h3>
              <h3 className="my-2">
              Send private photos and messages to a friend or group
              </h3>
              <div className="rounded-lg font-medium  my-2 px-3 py-2 bg-blue-300 text-white">
                Send Message
              </div>
            </div>
          </div>
        </InboxLayout>
      </MainLayout>
    </>
  );
}

export default InboxPage;
