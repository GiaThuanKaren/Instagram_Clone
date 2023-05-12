import React from 'react'
import CommentInput from '../CommentInput'
import { getAllComment, getAllReplied } from '../../services/api';
import { CommentInf } from '../../Model';
import { LazyLoadImage } from "react-lazy-load-image-component";
import LoadingAnimated from '../LoadingAnimation';

interface Props {
    idPost: string;
}

interface Comment {

}


const ReplyComment = function ({ _id, author, replies, authorId, content, parentCommentID, postId }: CommentInf) {
    const [openReplyInput, setopenReplyInput] = React.useState(false);
    const [openReplyComment, setopenReplyComment] = React.useState(false);
    const [ArrCommentReply, setArrCommentReply] = React.useState<any>([]);
    const [loading, setLoading] = React.useState(false)

    const HandleLoadMoreComment = async function (parentID: string,
        Currstate: boolean) {
        try {
            if (Currstate) {
                setopenReplyComment(false)
            } else {
                setLoading(true)
                let result = await getAllReplied(postId, _id)
                console.log(result)

                setArrCommentReply(result.data);
                setopenReplyComment(true);
            }
        } catch (error) {
            throw error
        }finally{
            setLoading(false)
        }
    }
    return <>
        <div className="flex py-3 my-1 mr-2 ">
            <div className="h-10 w-10 rounded-full overflow-hidden mr-5 mt-1 mb-3">
                <LazyLoadImage
                    className="h-full w-full object-cover"
                    src={author[0].image}
                />
            </div>
            <div>
                <p className="text-black text-base font-medium">{content} </p>
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
            <CommentInput idPost={postId} parentID={_id} />
        )}
        {
            openReplyInput && replies.length > 0 && replies.map((item: string, index: number) => {

            })
        }
        <div className="pl-3">
            {
                replies.length > 0 && <>
                    <p onClick={() => {
                        HandleLoadMoreComment(_id, openReplyComment)
                    }} className='text-black font-medium'> {openReplyComment ? "Hide" : "View More"}</p>
                </>
            }
            {
                loading ? <LoadingAnimated /> : openReplyComment && replies.length > 0 && ArrCommentReply.map((item: CommentInf, index: number) => {
                    return <>
                        <ReplyComment _id={item._id} author={item.author} authorId={item.authorId} content={item.content} parentCommentID={item.parentCommentID} postId={postId} replies={item.replies} key={index} />
                    </>
                })
            }
        </div>




    </>
}

function ListComment({ idPost }: Props) {
    const [ArrComment, setArrComment] = React.useState<CommentInf[]>([]);
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
                loading ? <LoadingAnimated /> : ArrComment.map((item: CommentInf, index: number) => {
                    console.log(item)
                    return (
                        <>
                            <ReplyComment _id={item._id} author={item.author} authorId={item.authorId} content={item.content} parentCommentID={item.parentCommentID} postId={idPost} replies={item.replies} key={index} />
                        </>
                    )
                })
            }

        </>
    )
}

export default ListComment