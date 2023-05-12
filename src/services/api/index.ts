import axios from "axios";
import { ShowToastify } from "../../utils";
import { signOut } from "next-auth/react";
const BASE_DEV = "http://localhost:5500";
const BASE_PRO = "https://instagram-backend-gia-thuan.vercel.app";

export const CreateNewPost = async function (formdata: FormData) {
    try {
        let userid = localStorage.getItem("user");
        formdata.append("authorId", JSON.parse(userid as string))
        const result = await axios.post(`${BASE_PRO}/api/post/cr_new_post`, formdata, {
            headers: { "Content-Type": "multipart/form-data", 'Access-Control-Allow-Origin': '*' },
        })
        console.log(result)
        return result.data
    } catch (e) {
        throw e
    }
}

export const GetAllPost = async function () {
    try {
        const reuslt = await axios.get(`${BASE_PRO}/api/post/get_all_post`)
        return reuslt.data;
    } catch (error) {
        throw error
    }
}



export const getAllPostByUser = async function () {
    try {
        let userid = localStorage.getItem("user");
        if (!userid) {
            throw new Error("Please try to login again ")
        }
        const result = await axios.post(`${BASE_PRO}/api/post/get_all_userpost`, {
            "authorId": JSON.parse(userid as string) as string
        }, {
            headers: { 'Access-Control-Allow-Origin': '*' },
        })
        return result.data;
    } catch (error) {
        throw error
    }
}


export const insertNewComment = async function (IDPost: string, msg: string, parententIdComment: string = "") {
    try {
        let userid = localStorage.getItem("user");
        if (!userid) {
            throw new Error("Please try to login again ")
        }
        const result = await axios.post(`${BASE_PRO}/api/post/cr_new_comment`, {
            "IDpost": IDPost,
            "msg": msg,
            "IDUserComment": JSON.parse(userid as string) as string,
            "parentIdComment": parententIdComment
        })
        return result.data
    } catch (error) {
        throw error
    }
}

export const getAllComment = async function (IDpost: string) {
    try {
        const result = await axios.post(`${BASE_PRO}/api/post/get_all_cmt`, {
            "IDPost": IDpost
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


export const HandleUserReact = async function (IDpost: string, flag: "REMOVE" | "INSERT") {
    let userid = localStorage.getItem("user");
    if (!userid) {
        throw new Error("Please try to login again ")
    }
    try {
        const result = await axios.post(`${BASE_PRO}/api/post/react_post`, {
            "IDpost": IDpost,
            "Flag": flag,
            "IdUser": JSON.parse(userid as string) as string,
        })
    } catch (error) {
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
    } catch (error) {
        console.log(error)
        ShowToastify("Error , Please Try to SignOut Again")
    }
}