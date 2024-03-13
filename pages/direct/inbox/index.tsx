import React from "react";
import { MainLayout } from "../../../src/Layouts";
import Pusher from "pusher-js";


function InboxPage() {
  React.useEffect(()=>{
    var pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY as string, {
      cluster: 'ap1'
    });
    var channel = pusher.subscribe('chat');
    channel.bind('my-event', function (data: any) {
      alert(JSON.stringify(data));
    });

    channel.bind('my-event1', function (data: any) {
      alert(JSON.stringify(data) + "123123");
    });
    return () => {
      pusher.unsubscribe("chat");
    };
  },[])

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
      <MainLayout>

      </MainLayout>
    </>
  );
}

export default InboxPage;
