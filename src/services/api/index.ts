
import axios from "axios";
import { ShowToastify } from "../../utils";
import { deleteCookie } from "cookies-next"
import { signOut } from "next-auth/react";
import { CommentFromIdPost, CreateNewPostModel, PostWithUserModel, ResponeModel } from "../../Model";
const BASE_DEV = "http://localhost:5000";
const BASE_PRO = "https://instagram-backend-gia-thuan.vercel.app";
const URL_ = process.env.NODE_ENV == "development" ? BASE_DEV : BASE_PRO
// import cloudinary from "cloudinary"
// const CloudinaryConfig = cloudinary.v2.config({
//     cloud_name: process.env.CLOUD_NAME,
//     api_key: process.env.CLOUD_API_KEY,
//     api_secret: process.env.CLOUD_API_SECRET
// })






export const searchUser = async function (textSearch: string) {
    try {
        let resutl = await axios.get(`${BASE_PRO}/api/post/get_user?query=${textSearch}`)
        return resutl.data
    } catch (error) {

    }
}


export const CreateNewPost = async function (formdata: CreateNewPostModel) {
    try {
        let userid = localStorage.getItem("user");
        // formdata.append("authorId", JSON.parse(userid as string))

        // const result = await axios.post(`${BASE_PRO}/api/post/cr_new_post`, formdata, {
        //     headers: { "Content-Type": "multipart/form-data", 'Access-Control-Allow-Origin': '*' },
        // })
        let result = await axios.post(`${URL_}/post`, formdata)
        console.log(result)
        return result.data
    } catch (e) {
        throw e
    }
}

export const GetAllPost = async function () {
    try {
        const reuslt = await axios.get<ResponeModel<PostWithUserModel[]>>(`${URL_}/post`)
        return reuslt.data;
    } catch (error) {
        throw error
    }
}



export const getAllPostByUser = async function (idUser: string) {
    try {
        // let userid = localStorage.getItem("user");
        // if (!userid) {
        //     throw new Error("Please try to login again ")
        // }
        // const result = await axios.post(`${BASE_PRO}/api/post/get_all_userpost`, {
        //     "authorId": JSON.parse(userid as string) as string
        // }, {
        //     headers: { 'Access-Control-Allow-Origin': '*' },
        // })

        let result = await axios.get<ResponeModel<PostWithUserModel[]>>(`${URL_}/post/userid/${idUser}`)
        return result.data
    } catch (error) {
        throw error
    }
}


export const insertNewComment = async function (idUser: string, IDPost: string, msg: string, parententIdComment: string = "") {
    try {
        let userid = localStorage.getItem("user");
        if (!userid) {
            throw new Error("Please try to login again ")
        }
        const result = await axios.post(`${URL_}/comment`, {
            // "IDpost": IDPost,
            // "msg": msg,
            // "IDUserComment": JSON.parse(userid as string) as string,
            // "parentIdComment": parententIdComment,
            "content": msg,
            "postid": IDPost,
            "userId": idUser,
            "parentid": parententIdComment

        })
        return result.data
    } catch (error) {
        throw error
    }
}

export const getAllComment = async function (IDpost: string, parentID: string = "") {
    try {
        const result = await axios.post<ResponeModel<CommentFromIdPost[]>>(`${URL_}/comment/findAllCommentByIdPost`, {
            // "IDPost": IDpost,
            "idPost": IDpost,
            "parentIdComment": parentID
        })
        return result.data
    } catch (error) {
        throw error
    }
}


export const getAllReplied = async function (IDpost: string, parentID: string) {
    try {
        const result = await axios.post(`${BASE_PRO}/api/post/get_all_replied_cmt`, {
            "IDPost": IDpost,
            "parentID": parentID
        })
        return result.data
    } catch (error) {
        throw error
    }
}


export const HandleUserReact = async function (iduser: string, IDpost: string, flag: "REMOVE" | "INSERT") {

    if (!iduser) {
        throw new Error("Please try to login again ")
    }
    try {
        const result = await axios.post(`${URL_}/post/react_post/${IDpost}`, {
            "IDpost": IDpost,
            "flag": flag,
            "userId": iduser
        })

    } catch (error) {
        ShowToastify("Ooppss Something Went Wrong , Please Refresh The Page")
        throw error
    }
}


export const UpdateToken = async function (IdUser: string, Action: "INSERT" | "DELETE", Token: string) {
    try {

        let result = await axios.post(`${BASE_DEV}/api/nofiti/update_token`, {
            "ACTION": Action,
            "TOKEN": Token,
            "IDUSER": IdUser,
        }, {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
        return result.data
    } catch (error) {
        console.log(error)
        ShowToastify("Failed to update token , Please try to sign in again ")
    }
}


export const HandleSignOut = async function (token: string) {
    try {
        console.log("Token Persist ", token)
        let userid = localStorage.getItem("user");
        if (!userid) {
            throw new Error("Please try to login again ")
        }
        let reuslt = UpdateToken(JSON.parse(userid as string) as string, "DELETE", token)
        await signOut()
        deleteCookie("additionalAuthParams")
    } catch (error) {
        console.log(error)
        ShowToastify("Error , Please Try to SignOut Again")
    }
}


export const handleFollowingUser = async function (ACTIONTYPE: "INSERT" | "DELETE", idUserFolliwing: string) {
    try {
        let userid = localStorage.getItem("user");
        if (!userid) {
            throw new Error("Please try to login again ")
        }
        let bodyData = {
            "ACTION": ACTIONTYPE,
            "IDUSER": JSON.parse(userid as string) as string,
            "IDUSERREQ": idUserFolliwing
        }
        let result = await axios.post(`${BASE_PRO}/api/user/folOrUnFolUser`, bodyData)

    } catch (error) {
        ShowToastify("Error , Please Try to SignOut Again")
    }
}

export const handleUploadImagesPostsCloudinary = async function (
    newFiles: any
) {
    try {
        let result = await axios.post("/api/upload", newFiles, {
            headers: { "Content-Type": "multipart/form-data", 'Access-Control-Allow-Origin': '*' },
        })
        console.log(
            "Result Handle Upload images Post Cloudinary",
            result.data
        )
    } catch (error) {

    }
}


// import { deleteCookie, getCookie } from "cookies-next";
const axiosClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
});

const UPLOAD_NAME = process.env.NEXT_PUBLIC_UPLOAD_NAME;
const UPLOAD_PRESET = process.env.NEXT_PUBLIC_UPLOAD_PRESET;

const upload = axios.create({
    baseURL: `https://api.cloudinary.com/v1_1/${UPLOAD_NAME}/image/upload`,
});

export const uploadCloudinary = async (file: File | null) => {
    if (!file) {
        return null
    }
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', UPLOAD_PRESET as string);
    const imageData = await upload.post('/', formData);
    return imageData.data.url;
};





export const handleSendMessageService = async function (
    idTarget: string,
    userCurrent: any,
    message: string
) {
    try {
        let { data } = await axios.post(
            BASE_DEV + "/chat",
            {
                "fromUser": userCurrent,
                "targetUser": {
                    "id": idTarget,

                },
                "message": message
            }
        )
        console.log(data)
        return data
    } catch (error) {
        throw error
    }
}


export const getConversationByListIdUser = async function (
    listidUser: string[]
) {
    try {


        let { data } = await axios.post(BASE_DEV + "/conversation/findConversationsByListIdUser", listidUser)
        return data.data
    } catch (error) {
        ShowToastify("Failed to fetch this conversation ")
        throw error
    }
}