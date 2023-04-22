import React, { SetStateAction } from 'react'
import { ICON, IconSolid } from '../../../utils/icon'
import { Author } from '../../../Model'
import CommentInput from '../../CommentInput'
import ListComment from '../../ListComment'
import { ShowToastify } from '../../../utils'
import { getAllComment } from '../../../services/api'
interface PropsUserPost {
    reaction: string[]
    media: string[]
    descripttion: string
    handleFN: React.Dispatch<SetStateAction<boolean>>;
    _id: string
}


function ModalUserPost({ _id, media, handleFN, reaction, descripttion }: PropsUserPost) {

    const [indexImg, setIndexImag] = React.useState(0)

    return (
        <>
            <div className='fixed w-screen h-screen top-0 bottom-0 right-0 left-0   bg-[#595959be] z-[100] flex justify-center items-center'>

                <ICON onClick={() => {
                    handleFN(false)
                }} icon={IconSolid.faTimes} className='text-white absolute top-0 right-0 p-5 m-5 text-2xl rounded-md' />
                <div className=' bg-white flex w-[90%] h-[90%]'>
                    <div className='w-[70%] relative flex justify-center'>
                        {
                            media.length > 0 && indexImg > 0 &&
                            <ICON onClick={() => {
                                setIndexImag(prev => prev - 1)
                            }} className="absolute left-0 top-1/2 p-3 rounded-full text-white hover:cursor-pointer bg-red-300 mx-1" icon={IconSolid.faChevronLeft} />
                        }
                        <img
                            className=" w-[90%] overflow-hidden h-full object-contain"
                            alt="123"
                            src={`https://drive.google.com/uc?id=${media[indexImg] as string}&export=download`}

                        />
                        {
                            media.length >= 0 && indexImg < media.length - 1 &&

                            <ICON onClick={() => {
                                setIndexImag(prev => prev + 1)
                            }} className="absolute right-0 top-1/2 p-3 rounded-full text-white hover:cursor-pointer bg-red-300 mx-1" icon={IconSolid.faChevronRight} />
                        }
                    </div>
                    <div className='flex-1 h-full overflow-y-auto relative'>
                        <div className="h-[calc(100%_-_70px)] overflow-y-auto">
                            <ListComment idPost={_id} />
                        </div>
                        <CommentInput idPost={_id} parentID="" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default ModalUserPost
{/* <img
    className=" w-full overflow-hidden aspect-[2/3] object-contain"
    alt="123"
    src={`https://drive.google.com/uc?id=${"1f0OBgU6W2Du44q4rWA9CmYJgbenBEGXA" as string}&export=download`}
/> */}