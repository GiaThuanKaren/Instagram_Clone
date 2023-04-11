import axios from "axios";
const BASE_DEV = "http://localhost:5500";
const BASE_PRO = "https://instagram-backend-gia-thuan.vercel.app";

export const CreateNewPost = async function (formdata: FormData) {
    try {

        const result = await axios.post(`${BASE_DEV}/api/post/cr_new_post`, {
            data: formdata

        }, {
            headers: { "Content-Type": "multipart/form-data" },
        })
        console.log(result)
    } catch (e) {
        throw e
    }
}