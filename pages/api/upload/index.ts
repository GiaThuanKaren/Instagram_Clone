import cloudinary from "cloudinary"
import { NextApiRequest, NextApiResponse } from "next"
import { Readable } from "stream"
import formidable, { errors as formidableErrors } from 'formidable';
import { NextRequest } from "next/server";
const CloudinaryConfig = cloudinary.v2.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
})


type fileUpload = {
    filename: string,
    filepath: string

}


export default async function POST (
    req,
    
) {
    try {
        const formData =  req.body.keys()
        console.log(formData)
        // console.log(
        //     req.body
        // )
        
        // const file = formData.get("file");
        // console.log(
        //     "Upload Server Function Log",
        //     file
        // )
        return "Done"
    } catch (error) {
        throw error
    }
}


// export const handleUploadImagesPostsCloudinary2 = async function (newFiles: any) {
//     try {
//         const multiplePhotoPostUpload = newFiles.map((file: fileUpload) => (
//             cloudinary.v2.uploader.upload(
//                 file.filepath, {
//                 folder: "instagram_clone",

//             }
//             )
//         ))
//         return await Promise.all(
//             multiplePhotoPostUpload
//         )
//     } catch (error) {
//         console.log(`Failed To Upload Multi Image`, error)
//     }
// }

// export const config = {
//     api: {
//         bodyParser: true,
//     },
// }
// const BufferToStream = function (buffer) {
//     const stream = new Readable();
//     stream.push(buffer);
//     stream.push(null);
//     return stream;
// };

// export default async function handler(
//     req: Request,
//     res: Response
// ) {
//     if (req.method === 'POST') {

//         console.log(
//             "Body Req",


//         )
//         const form = formidable();

//         form.parse(req, (err, fields) => {
//             if (err) return console.error(err);

//             console.log(fields.id);
//         });
//         // handleUploadImagesPostsCloudinary()
//         // Process a POST request
//     } else {

//         // Handle any other HTTP method
//     }
//     res.status(200).json({ message: 'Hello from Next.js!' })
// }