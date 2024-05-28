

import React from "react";
import Cropper from "react-easy-crop";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ICON, IconSolid } from "../../utils/icon";
import dynamic from "next/dynamic";
import { CreateNewPost, handleUploadImagesPostsCloudinary } from "../../services/api";
import { useSession } from "next-auth/react";
import { CloudinaryRespone, CreateNewPostModel } from "../../Model";
import { useRouter } from "next/router";
import { ShowToastify } from "../../utils";
import { Session } from "next-auth";
import cloudinary from "cloudinary"
import axios from "axios";
import { log } from "console";
import { NameCustomEvents, publish } from "../../utils/event";

interface Props {
  HandleFUNC: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Statetab {
  handleFUNC: React.Dispatch<React.SetStateAction<any>>;
}

interface ImageSourceInf {
  linkURL: string,
  file: File
}
const Editor = dynamic(() => import("../Editor"), { ssr: false });

function CreatePostModal({ HandleFUNC }: Props) {
  const { data, status } = useSession()
  console.log("Session ", data)
  const InputFIleRef = React.useRef<any>();
  const [fileImage, setFileImage] = React.useState<File[]>([

  ])
  const [valueText, setValueText] = React.useState<any>()
  const [ImageSource, SetImageSource] = React.useState<ImageSourceInf[]>([]);
  const { push } = useRouter()

  const [ImageIndexPreview, setImageIndexPreview] = React.useState<number>(0);
  const handleUploadPost = async function () {
    try {
      // await axios.post("/api/upload", fileImage,{

      // for(let item of fileImage){
      //   console.log(item)
      //   formData.append("file",item)
      // }


      // console.log(asyncManyFile)

      let result = await Promise.all(
        fileImage.map((item: File) => {
          async function upImage() {
            const formData = new FormData()
            formData.append("upload_preset", "giathuanstograge")
            formData.append("file", item)
            const data: CloudinaryRespone = await fetch('https://api.cloudinary.com/v1_1/dkohegbsh/image/upload', {
              method: 'POST',
              body: formData
            }).then(r => r.json());
            console.log(data)
            return data
          }
          return upImage()
        })
      )
      console.log("Data up ảnht thành công ")
      console.log(result)

      // formData.append(
      //   "file", fileImage[0]
      // )

      // // // }})
      // const data: CloudinaryRespone = await fetch('https://api.cloudinary.com/v1_1/dkohegbsh/image/upload', {
      //   method: 'POST',
      //   body: formData
      // }).then(r => r.json());
      // console.log("Data up ảnht thành công ")
      // console.log(data)


      let userData: any = data?.user
      let userId = userData.id
      const formdata: CreateNewPostModel = {
        contend: valueText,
        images: result.map((item: CloudinaryRespone) => {
          return JSON.stringify(item)
        }),
        userId: userId
      }
      let resultUploadPost = await CreateNewPost(formdata)
      ShowToastify("Done")
      publish(NameCustomEvents.closeModalCreatePost)
      // console.log(result)
    } catch (e) {
      console.log(
        e
      )
    }
  }


  return (
    <>
      <div className="transition-all fixed w-screen h-screen top-0 bottom-0 right-0 left-0 overflow-hidden  bg-[#595959be] z-[2] flex justify-center items-center">
        <input onChange={(e) => {
          const Arrfiles = Object.values(e.target.files as FileList)

          console.log(Arrfiles)
          let StringURLIMG = Arrfiles.map((item: File, index) => {
            let obj = {
              file: item,
              linkURL: URL.createObjectURL(item)
            }
            return obj;
          })

          SetImageSource(StringURLIMG)
          if (Arrfiles.length > 0) {
            setFileImage(
              Arrfiles
            )
          } else {
            ShowToastify("Can not load these images , please try again")
          }
          console.log(Arrfiles)
          console.log("Number of files")
        }} multiple className="hidden" ref={InputFIleRef} type="file" name="tenfile" id="" />

        <div
          onClick={() => {
            console.log("ksjlkfjkl");
            HandleFUNC(false);
          }}
          className="hover:cursor-pointer absolute right-0 top-0 p-4 text-white text-[1.5rem]"
        >
          <ICON icon={IconSolid.faXmark} />
        </div>
        <div className="min-w-[700px] max-w-[700px] h-[70%] overflow-y-auto  bg-white rounded-xl overflow-hidden">
          <div className="text-center border-b-[2px] py-3 font-medium border-[#DBDBDB] flex justify-between">
            <h3 className="font-medium text-white ">Tạo bài viết mới</h3>
            <h3 className="font-medium">Tạo bài viết mới</h3>
            <div onClick={(e) => {
              console.log(" Nút Up ảnh")
              if (ImageSource.length > 0) {
                handleUploadPost()
              } else e.preventDefault();

            }}>
              <h3 className={`font-medium px-3  ${ImageSource.length > 0 ? "text-blue-400 hover:cursor-pointer" : "text-white"}`}>Share</h3>
            </div>
            <h3 onClick={async () => {
              const timestamp = Math.round((new Date).getTime() / 1000);

              // let {timestamp,signature}  = signuploadwidget()
              // let result = await axios.get("/api/upload/signature")
              // console.log(result.data)
              let body = new FormData()
              body.append("public_id", "giathuanstograge/pllyaz76rqmc5frzt6uf")
              body.append("upload_preset", "giathuanstograge")
              body.append("api_key", "244115717283225")
              body.append("signature", "94f9ef1ec5bbcbe42b5e99e0e79f1a5d39f26ae1")
              body.append("timestamp", timestamp.toString())
              const data = await fetch('https://api.cloudinary.com/v1_1/dkohegbsh/image/destroy', {
                method: 'POST',
                body: body
              }).then(r => r.json());
              console.log(data)
            }}>

              Delete
            </h3>
          </div>
          {
            ImageSource.length == 0 ? <div className="h-full w-full flex justify-center items-center">
              <div onClick={() => {
                InputFIleRef.current.click()
              }} className="font-medium px-3 py-2 bg-blue-300 text-white rounded-md">
                Pick some files
              </div>
            </div> : <>

              <div className="h-[60%] overflow-y-hidden  ">

                <div className="h-full w-full relative">
                  <ICON
                    onClick={() => {
                      console.log(`Current Image Idx ${ImageIndexPreview}`)
                    }}
                    className="p-2 absolute right-0 mr-2 mt-2 top-0" icon={IconSolid.faX}
                  />

                  {
                    ImageIndexPreview > 0
                    &&
                    <ICON className="absolute left-0  top-1/2 p-2 ml-3  rounded-full text-white bg-gray-400" onClick={() => {
                      setImageIndexPreview(prev => prev - 1)
                    }} icon={IconSolid.faAngleLeft} />

                  }
                  <div className=" my-3 w-full">
                    <img className=" object-contain h-full w-full" src={ImageSource[ImageIndexPreview].linkURL} />

                  </div>

                  {
                    ImageIndexPreview < ImageSource.length - 1 &&
                    <ICON onClick={() => {
                      setImageIndexPreview(prev => prev + 1)
                    }} className="absolute right-0  top-1/2 p-2 rounded-full mr-3 text-white bg-gray-400" icon={IconSolid.faAngleRight} />
                  }

                </div>


              </div>
              <div className="h-[50%] max-h-[50vh]   w-full ">
                <Editor value={valueText} onChange={(data: any) => {
                  setValueText(data)
                }} />
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
