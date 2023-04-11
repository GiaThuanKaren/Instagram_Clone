import { getSession } from "next-auth/react"
import prisma from "../../../src/utils/lib/prisma"
import { NextApiRequest, NextApiResponse } from "next"



export default async function checkNewUser(req: NextApiRequest, res: NextApiResponse) {
    const session = await getSession({ req })
    
    const user = await prisma.user.findUnique({ where: { email: session?.user?.email as string } })
    const isNewUser = !user

    res.status(200).json({ isNewUser })
}
