import React from "react";
import Cropper from "react-easy-crop";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ICON, IconSolid } from "../../utils/icon";
interface Props {
  HandleFUNC: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Statetab {
  handleFUNC: React.Dispatch<React.SetStateAction<any>>;
}

function CreatePostModal({ HandleFUNC }: Props) {
  const InputFIleRef = React.useRef<any>();
  const [ImageSource, SetImageSource] = React.useState<string[]>([]);

  return (
    <>
      <div className="transition-all fixed w-screen h-screen top-0 bottom-0 right-0 left-0 overflow-hidden bg-[#595959be] z-[2] flex justify-center items-center">
        <input onChange={(e) => {
          const Arrfiles = Object.values(e.target.files as FileList)
          const StringURLIMG = Arrfiles.map((item: File, index) => {
            return URL.createObjectURL(item);
          })
          SetImageSource(StringURLIMG)
          console.log(StringURLIMG)
          console.log("Number of files")
        }} multiple className="hidden" ref={InputFIleRef} type="file" name="" id="" />

        <div
          onClick={() => {
            console.log("ksjlkfjkl");
            HandleFUNC(false);
          }}
          className="hover:cursor-pointer absolute right-0 top-0 p-4 text-white text-[1.5rem]"
        >
          <ICON icon={IconSolid.faXmark} />
        </div>
        <div className="min-w-[700px] max-w-[700px] h-[70%] bg-white rounded-xl overflow-hidden">
          <div className="text-center border-b-[2px] py-3 font-medium border-[#DBDBDB]">
            <h3 className="font-medium">Tạo bài viết mới</h3>
          </div>
          {
            ImageSource.length == 0 ? <div className="h-full w-full flex justify-center items-center">
              <div onClick={() => {
                InputFIleRef.current.click()
              }} className="font-medium px-3 py-2 bg-blue-300 text-white rounded-md">
                Pick some files
              </div>
            </div> : <>
              <div className="h-[60%] overflow-y-hidden ">
                {ImageSource.map((item: string, index) => {
                  return <img className="object-contain h-full w-full" src={item} key={index} />
                })}
              </div>
            </>
          }


          <div className="overflow-y-auto h-[40%]">

          </div>
        </div>
      </div>
    </>
  );
}

export default CreatePostModal;
