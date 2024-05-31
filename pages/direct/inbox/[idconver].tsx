import React from 'react'
import { MainLayout } from '../../../src/Layouts'
import { useRouter } from 'next/router'
import { v4 as uuidv4 } from 'uuid';
import { MessageInbox } from '.';
import InboxLayout from '../../../src/Layouts/InboxLayout';
import { useSession } from 'next-auth/react';
import { getConversationByListIdUser, handleSendMessageService } from '../../../src/services/api';
import LoadingAnimated from '../../../src/Components/LoadingAnimation';
import { hashObjectIds } from '../../../src/utils/lib/crypto';
import { ConversationListMessage, Message, User } from '../../../src/Model';

interface MessageItemCompProps extends Message {
    currentUserId: string
    alignLeft?: boolean
    image: string
}

function MessageItemComp(
    {
        alignLeft = true, message,
        UserFrom, UserSend,
        currentUserId,
        image
    }: MessageItemCompProps
) {
    console.log(currentUserId)
    
    // const { data, status } = useSession()
    // const userData: any = data?.user
    // console.log(
    //     userData.id
    // )
    return <>
        <div className={'flex px-3 items-center w-full mb-6 mt-2 ' + ` ${alignLeft ? " justify-end" : " justify-start"}`}>
            <div className={'basis-1/2 '}>
                <div className=' w-full' >
                    {/* {
                        currentUserId == UserFrom.id &&
                        <>
                            <div className='h-10 w-10 rounded-full bg-red-300 '>
                                    
                            </div>
                        </>
                    } */}
                    <div className='h-10 w-10 rounded-full bg-red-300 '>
                        <img
                            src={image}
                            alt=""
                        />
                    </div>
                    <p className='break-words'>
                        {
                            message
                            // + JSON.stringify(alignLeft)
                        }
                        {/* {
                            UserFrom.id + " F - S " + UserSend.id
                        } */}
                    </p>
                </div>
            </div>

        </div >
    </>
}


function InboxPageByIdConversation() {
    const {
        push,
        query,
        isReady
    } = useRouter()
    const { data, status } = useSession()
    let userData: any = data?.user
    console.log(query.idconver, " Id Conver")
    const [textChat, setTextChat] = React.useState("")
    const [listMessage, setListMessage] = React.useState<Message[]>([])
    const handleSendMessage = async function () {
        try {
            let result = await handleSendMessageService(
                query.idconver as string,
                data?.user,
                textChat
            )

        } catch (error) {
            console.log(error)
            throw error
        }
    }
    console.log(listMessage, "listMessage")
    React.useEffect(() => {


        async function FetchApi() {
            try {
                let result: ConversationListMessage = await getConversationByListIdUser(
                    [
                        "65f2b01ebe65c5610f001bfd",
                        "65d1db14eba524ec07de1db3"
                    ]
                )
                console.log(
                    Object.keys(result), "ConversationListMessage"
                )
                console.log(
                    result.messages
                )
                setListMessage(
                    result.messages
                )
            } catch (error) {
                throw error
            }
        }


        if (isReady) {
            FetchApi()

        }
        // console.log(
        //     query.idconver
        // )
        // console.log(
        //     "new Object id ",
        //     hashObjectIds(
        //         "65f2b01ebe65c5610f001bfd",
        //         "65d1db14eba524ec07de1db3"
        //     )
        // )




    }, [isReady])



    return (
        <>
            {/* <p>
            Current Id User { userData.id}
        </p> */}
            <MainLayout hideLeftSideBar>

                {
                    status != "authenticated" ? <LoadingAnimated /> :

                        <InboxLayout>
                            <div className='w-full h-full relative'>
                                <div
                                    className='h-full w-full overflow-y-auto pb-16 '
                                >

                                    {/*  Message Display Area */}
                                    {/* {
                                        Array.from(Array(10).keys()).map((item: number) => {
                                            return <>
                                                <MessageItemComp

                                                    IdUserChatItem={item % 2 == 0 ? userData.id : item}
                                                    message={
                                                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, numquam nihil. Cumque, maxime inventore distinctio harum est, officiis ratione repudiandae sapiente delectus quisquam similique quia modi accusamus molestias adipisci aut!"
                                                    }
                                                />
                                            </>
                                        })
                                    } */}

                                    {
                                        listMessage.map((item: Message, index: number) => {
                                            console.log("Aligh Status ", item.UserFrom.id == userData.id)
                                            return <>
                                                <MessageItemComp
                                                    currentUserId={
                                                        userData.id
                                                    }
                                                    alignLeft={
                                                        item.UserSend.id == userData.id
                                                    }
                                                    image={
                                                        item.UserSend.id == userData.id ? item.UserSend.image : item.UserFrom.image
                                                    }
                                                    {
                                                    ...item
                                                    }
                                                />


                                            </>
                                        })
                                    }


                                </div>


                                <div
                                    className="absolute bottom-0 left-0 right-0 px-2 flex items-center justify-between border-t border-[#EFEFEF] bg-white py-[8px]"
                                >
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
                                        className="bg-transparent flex-1 px-3 outline-none break-words "

                                        value={textChat}
                                        type="text"
                                        onChange={(e) => {
                                            setTextChat(e.target.value)
                                        }}
                                        onKeyDown={async (e) => {
                                            if (e.key === "Enter") {
                                                await handleSendMessage()
                                                setTextChat("")
                                            }

                                        }}
                                        placeholder="Messages"

                                    />


                                </div>




                            </div>
                        </InboxLayout>
                }
            </MainLayout>
        </>
    )
}

export default InboxPageByIdConversation