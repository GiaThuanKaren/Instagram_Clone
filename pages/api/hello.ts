// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from "../../src/utils/lib/prisma"
type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    let result = await prisma.account.count();
    console.log(result)
    return res.json(result)
  } catch (e) {
    throw e
  }
  res.status(200).json({ name: 'John Doe' })
}
