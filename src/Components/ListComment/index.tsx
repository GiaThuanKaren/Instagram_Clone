import React from 'react'
import CommentInput from '../CommentInput'
import { getAllComment, getAllReplied } from '../../services/api';
import { CommentFromIdPost, CommentInf } from '../../Model';
import { LazyLoadImage } from "react-lazy-load-image-component";
import LoadingAnimated from '../LoadingAnimation';

interface Props {
    idPost: string;
}

interface Comment {

}


const ReplyComment = function ({ id, user, postid, replies, userId, content, parentid, }: CommentFromIdPost) {
    const [openReplyInput, setopenReplyInput] = React.useState(false);
    const [openReplyComment, setopenReplyComment] = React.useState(false);
    const [ArrCommentReply, setArrCommentReply] = React.useState<any>([]);
    const [loading, setLoading] = React.useState(false)

    const HandleLoadMoreComment = async function (
        parentID: string,
        Currstate: boolean
    ) {
        try {
            if (Currstate) {
                setopenReplyComment(false)
            } else {
                setLoading(true)
                let result = await getAllComment(postid, id)
                console.log(result)

                setArrCommentReply(result.data);
                setopenReplyComment(true);
            }
        } catch (error) {
            throw error
        } finally {
            setLoading(false)
        }
    }
    return <>
        <div className="flex py-3 my-1 mr-2 ">
            <div className="h-10 w-10 rounded-full overflow-hidden mr-5 mt-1 mb-3">
                <LazyLoadImage
                    className="h-full w-full object-cover"
                    src={user.image}
                />

            </div>
            <div>
                <p className="text-black text-base font-medium">{content} {id} </p>
                <p className="text-white text-xs font-light">

                </p>
                <p
                    onClick={() => {
                        setopenReplyInput(!openReplyInput);
                    }}
                    className="  font-medium text-xs text-black my-1"
                >
                    {openReplyInput ? "Cancel" : "Reply"}
                </p>
            </div>
        </div>

        {openReplyInput && (
            <CommentInput idPost={postid} parentID={id} />
        )}
        {
            openReplyInput && replies.length > 0 && replies.map((item: string, index: number) => {

            })
        }
        <div className="pl-3">
            {
                replies.length > 0 && <>
                    <p onClick={() => {

                        HandleLoadMoreComment(parentid, openReplyComment)
                    }} className='text-black font-medium'> {openReplyComment ? "Hide" : "View More"}</p>
                </>
            }
            {
                loading ? <div className='my-2 py-5'>
                    <LoadingAnimated />
                </div> : openReplyComment && replies.length > 0 && ArrCommentReply.map((item: CommentFromIdPost, index: number) => {
                    console.log("ParentId",)
                    return <>
                        <ReplyComment {...item} parentid={item.id} key={index} />
                    </>
                })
            }
        </div>




    </>
}

function ListComment({ idPost }: Props) {
    const [ArrComment, setArrComment] = React.useState<CommentFromIdPost[]>([]);
    const [loading, setLoading] = React.useState(true)
    React.useEffect(() => {
        async function FetchApi() {
            try {
                let result = await getAllComment(idPost as string)
                console.log(result)
                setArrComment(result.data)
            } catch (error) {
                throw error
            } finally {
                setLoading(false)
            }
        }
        FetchApi()
    }, [])

    return (
        <>
            {
                loading ? <LoadingAnimated /> : ArrComment.map((item: CommentFromIdPost, index: number) => {
                    console.log(item)
                    return (
                        <>
                            <ReplyComment
                                // parentid={item.parentid}
                                {
                                ...item
                                }
                                key={index}
                            />
                        </>
                    )
                })
            }

        </>
    )
}

export default ListComment