import axios from "axios";
const BASE_DEV = "http://localhost:5500";
const BASE_PRO = "https://instagram-backend-gia-thuan.vercel.app";

export const CreateNewPost = async function (formdata: FormData) {
    try {
        let userid = localStorage.getItem("user");
        formdata.append("authorId", JSON.parse(userid as string))
        const result = await axios.post(`${BASE_PRO}/api/post/cr_new_post`,formdata, {
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
        const reuslt = await axios.get(`${BASE_DEV}/api/post/get_all_post`)
        return reuslt.data;
    } catch (error) {

    }
}
