import React from "react";
import Cropper from "react-easy-crop";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { ICON, IconSolid } from "../../utils/icon";
interface Props {
  HandleFUNC: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Statetab {
  handleFUNC: React.Dispatch<React.SetStateAction<any>>;
}

const CropComp = function ({ imageSource }: { imageSource: string }) {
  const [ImageSource, SetImageSource] = React.useState<string[]>([imageSource]);
  // https://images.unsplash.com/photo-1676838657113-79bf37e0851a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80
  const [crop, setCrop] = React.useState({ x: 0, y: 0 });
  const [zoom, setZoom] = React.useState(1);
  const onCropComplete = React.useCallback(
    (croppedArea: any, croppedAreaPixels: any) => {
      console.log(croppedArea, croppedAreaPixels);
    },
    []
  );

  return (
    <>
      <div className="h-full w-full overflow-hidden">
        <Cropper
          image={
            "https://images.unsplash.com/photo-1676838657113-79bf37e0851a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          }
          crop={crop}
          zoom={zoom}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
        />
      </div>
    </>
  );
};

const CreatePostComp = function ({}: Statetab) {
  const InputFIleRef = React.useRef<any>();
  const [ImageSource, SetImageSource] = React.useState<string>("");
  return (
    <>
      <div className="flex items-center justify-center h-full ">
        <input
          multiple={true}
          onChange={(e) => {
            let tartget = e.target;
            const FilesData =tartget.files?.item(0)
            SetImageSource(URL.createObjectURL(FilesData as Blob));
            console.log(e.target.files);
          }}
          ref={InputFIleRef}
          type="file"
          name=""
          id=""
          className="hidden"
        />

        <div className="flex flex-col items-center">
          <svg
            aria-label="Biểu tượng thể hiện file phương tiện, chẳng hạn như hình ảnh hoặc video"
            className="_ab6-"
            color="#262626"
            fill="#262626"
            height="77"
            role="img"
            viewBox="0 0 97.6 77.3"
            width="96"
          >
            <path
              d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z"
              fill="currentColor"
            ></path>
            <path
              d="M84.7 18.4 58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z"
              fill="currentColor"
            ></path>
            <path
              d="M78.2 41.6 61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z"
              fill="currentColor"
            ></path>
          </svg>
          <p className="text-[1.5rem] font-thin py-3 my-2">
            Kéo ảnh và video vào đây
          </p>
          <button
            onClick={() => {
              if (InputFIleRef) {
                InputFIleRef?.current?.click();
              }
            }}
            className="cursor-pointer text-white bg-[#0095F6] px-2 py-1 rounded-lg font-medium"
          >
            Chọn từ máy tính
          </button>
        </div>
      </div>
    </>
  );
};

const ReleasePost = function ({
  ArrimageSource = [
    "https://images.unsplash.com/photo-1676845578082-2e08e7c359b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1627209876750-9db65322c4ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1676838657113-79bf37e0851a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  ],
}: {
  ArrimageSource: string[];
}) {
  const [ArrImagePreview, ArrImageReview] = React.useState<string[]>(() =>
    ArrimageSource ? ArrimageSource : []
  );
  const [indexImagePreview, SetindexImagePreview] = React.useState(0);
  return (
    <>
      <div className="flex h-full w-[1000px]  bg-red-300">
        <div className="basis-3/4    relative">
          <div className="absolute h-full w-full top-0 left-0 right-0 bottom-0 flex justify-between items-center px-4">
            {indexImagePreview > 0 && (
              <div
                onClick={() => {
                  SetindexImagePreview((prev) => prev + 1);
                }}
                className="bg-gray-300 hover:cursor-pointer text-black p-1 px-2 rounded-full text-lg"
              >
                <ICON icon={IconSolid.faCircleArrowLeft} />
              </div>
            )}
            <LazyLoadImage
              src={
                ArrImagePreview.length > 0
                  ? ArrImagePreview[indexImagePreview]
                  : "https://images.unsplash.com/photo-1676845578082-2e08e7c359b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
              }
              className="w-full h-full"
            />
            {indexImagePreview < ArrimageSource.length && (
              <div
                onClick={() => {
                  SetindexImagePreview((prev) => prev - 1);
                }}
                className="bg-gray-300 hover:cursor-pointer text-black p-1 px-2 rounded-full text-lg"
              >
                <ICON icon={IconSolid.faCircleArrowRight} />
              </div>
            )}
          </div>
        </div>
        <div className="basis-1/4"></div>
      </div>
    </>
  );
};

function CreatePostModal({ HandleFUNC }: Props) {
  const InputFIleRef = React.useRef();
  const [ImageSource, SetImageSource] = React.useState<string>("");
  const [Statetab, SetStateTab] = React.useState([]);
  return (
    <>
      <div className="transition-all fixed w-screen h-screen top-0 bottom-0 right-0 left-0 overflow-hidden bg-[#595959be] z-[2] flex justify-center items-center">
        <div
          onClick={() => {
            console.log("ksjlkfjkl");
            HandleFUNC(false);
          }}
          className="hover:cursor-pointer absolute right-0 top-0 p-4 text-white text-[1.5rem]"
        >
          <ICON icon={IconSolid.faXmark} />
        </div>
        <div className="min-w-[700px] h-[70%] bg-white rounded-xl overflow-hidden">
          <div className="text-center border-b-[2px] py-3 font-medium border-[#DBDBDB]">
            <h3 className="font-medium">Tạo bài viết mới</h3>
          </div>
          {/* <CreatePostComp handleFUNC={SetStateTab} /> */}
          {/* <CropComp /> */}
          
        </div>
      </div>
    </>
  );
}

export default CreatePostModal;
