import cloudinary from "cloudinary"
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { NextApiResponse } from "next";

export default async function handleSignature(
    req: NextRequest,
    res: NextApiResponse
) {
    try {
        const signuploadwidget = () => {
            const timestamp = Math.round((new Date).getTime() / 1000);

            const signature = cloudinary.v2.utils.api_sign_request({
                timestamp: timestamp,
                source: 'vi',
                folder: 'giathuanstograge'
            }, "0tC8rQ7HNmOB_Lef9qoUjVO8nB8");

            return { timestamp, signature }
        }
        let { signature, timestamp } = signuploadwidget()
        res.json({
            signature, timestamp
        })
        // return { signature, timestamp }

    } catch (error) {
        res.json(error)
        throw error
    }
}