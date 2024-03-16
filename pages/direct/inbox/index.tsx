import React from "react";
import { MainLayout } from "../../../src/Layouts";
import Pusher from "pusher-js";
import { useSession } from "next-auth/react";



function InboxPage() {
  const { data, status } = useSession()
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
        <div className="h-screen w-full bg-red-300 flex">

          <div className="basis-1/3 h-full overflow-y-auto">



            <div className="h-[72px] w-full mb-2 bg-gray-400 flex items-center px-2 py-1">
              <div className="h-14 w-14  bg-red-400 rounded-full">

              </div>
              <div className="ml-2 ">
                <p className="font-medium text-white ">Gia Thuan </p>
                <p>Gia Thuan Test 1</p>
              </div>
            </div>


            <div className="h-[72px] w-full mb-2 bg-gray-400 flex items-center px-2 py-1">
              <div className="h-14 w-14  bg-red-400 rounded-full">

              </div>
              <div className="ml-2 ">
                <p className="font-medium text-white ">Gia Thuan </p>
                <p>Gia Thuan Test 2</p>
              </div>
            </div>



            {
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
            }


          </div>
          <div className="basis-2/3 h-full bg-red-500  overflow-y-auto ">

          </div>
        </div>
      </MainLayout>
    </>
  );
}

export default InboxPage;
