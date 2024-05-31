import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Pusher from "pusher-js"
import React from 'react'

interface InboxLayoutProp {
    children: React.ReactNode
}

type UserType = {
    id: string;
    img: string;
    name: string;
    email?: string
    message: string
}

function InboxLayout({ children }: InboxLayoutProp) {
    const {
        push,
        query
    } = useRouter()
    const { data, status } = useSession()
    const [listUserChat, setListUserChat] = React.useState<UserType[]>([
        {
            id: "",
            name: "",
            message: "",
            img: ""
        }
    ])
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
                console.log(data, typeof (data))
                // alert(JSON.stringify(data));
            });


            // channel.bind('my-event1', function (data: any) {
            //   alert(JSON.stringify(data) + "123123");
            // });
            return () => {
                pusher.unsubscribe("chat");
            };
        }

    }, [status])


    React.useEffect(()=>{
        

    },[])


    return (
        <>
            <div className="h-screen w-full  flex px-2">

                <div className="basis-1/3 h-full overflow-y-auto border-r-2 border-gray-300">


                    {/* {
                        listUserChat.map((item: UserType, index: number) => {
                            return <>
                                <div onClick={() => {
                                    push(`/direct/inbox/${item.id}`)
                                }} className="h-[72px] w-full mb-2 bg-gray-400 flex items-center px-2 py-1">
                                    <div className="h-14 w-14  bg-red-400 rounded-full">

                                    </div>
                                    <div className="ml-2 ">
                                        <p className="font-medium text-white ">
                                            {item.name}
                                        </p>

                                    </div>
                                </div>
                            </>
                        })
                    } */}



                    <div onClick={() => {
                        push(`/direct/inbox/65f2b01ebe65c5610f001bfd`)
                    }} className={"h-[72px] w-full   mb-2 flex items-center px-2 py-1" + `${query.idconver == "65f2b01ebe65c5610f001bfd" ? " bg-gray-200" : " hover:bg-gray-100"}`}>
                        <div className="h-14 w-14   bg-red-400 rounded-full">

                        </div>
                        <div className="ml-2 ">
                            <p className="font-medium text-black ">
                                {"Gia Thuận Workspace 2"}
                            </p>
                            <p>New Message</p>
                        </div>
                    </div>

                    <div onClick={() => {
                        push(`/direct/inbox/65d1db14eba524ec07de1db3`)
                    }} className={"h-[72px] w-full mb-2 flex items-center px-2 py-1" + `${query.idconver == "65d1db14eba524ec07de1db3" ? " bg-gray-200" : " hover:bg-gray-100"}`}>
                        <div className="h-14 w-14  bg-red-400 rounded-full">

                        </div>
                        <div className="ml-2 ">
                            <p className="font-medium text-black">
                                {"Thuận Gia"}
                            </p>
                            <p>New Message</p>
                            {/* <p>Gia Thuan Test 22</p> */}
                        </div>
                    </div>





                </div>
                <div className="basis-2/3 h-screen  relative w-full" >
                    {children}
                </div>
            </div >
        </>
    )
}

export default InboxLayout