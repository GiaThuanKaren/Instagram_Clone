import React from 'react'
import { ShowToastify } from '../../utils';
import { insertNewComment } from '../../services/api';
interface Props {
    idPost: string;
    parentID?: string;
}

function CommentInput({ idPost, parentID }: Props) {
    const [text, settext] = React.useState<string>("");
    const InputCommentEle = React.useRef(null);
    const handleComment = async function (parententIdComment: string) {
        try {
            const result = await insertNewComment(idPost as string, text, parententIdComment)
            ShowToastify("Thanks Your Feedback")

        } catch (error) {
            ShowToastify("Opps Something Went Wrong , Pleasy Refresh Your Page")
            throw error
        }
        finally {
            settext("")
        }
    }


    return (
        <>
            <div className="h-[70px] px-2 flex items-center justify-between border-t border-[#EFEFEF] py-[8px]">
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
                    value={text}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        settext(e.target.value);
                    }}
                    onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
                        if (e.code == "Enter") {
                            console.log([InputCommentEle.current]);
                            handleComment("")
                        }
                    }}
                    ref={InputCommentEle}
                    type="text"
                    className="bg-transparent flex-1 px-3 outline-none break-words "
                    placeholder="Thêm bình luận"
                />
                <p
                    className={`font-medium ${text === "" ? "text-[#B6DCFF]" : "text-[#0396F6]"
                        }  `}
                >
                    Đăng
                </p>
            </div>
        </>
    )
}

export default CommentInput