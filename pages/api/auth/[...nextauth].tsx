import NextAuth, { Account, AuthOptions, Profile, User } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "../../../src/utils/lib";
import { PrismaClient } from "@prisma/client"
const prisma1 = new PrismaClient()
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "../../../src/utils/lib/prisma"
import { NextApiRequest, NextApiResponse } from "next";

import { AdapterUser } from "next-auth/adapters";
import { UpdateToken } from "../../../src/services/api";

// export const authOptions: AuthOptions = ;






// export default async function auth(req:NextApiRequest,res:NextApiResponse){

//   console.log(req.query)
//   return await NextAuth({
//     // Configure one or more authentication providers
//     providers: [
//       GoogleProvider({
//         clientId:
//           process.env.NEXT_PUBLIC_GGID as string,
//         clientSecret: process.env.NEXT_PUBLIC_GGSEC as string,

//       }),
//       FacebookProvider({
//         clientId: process.env.NEXT_PUBLIC_FBID as string,
//         clientSecret: process.env.NEXT_PUBLIC_FBSEC as string,
//       }),
//       CredentialsProvider({
//         name: "credentials",
//         credentials: {
//           email: { label: "email", type: "text" },
//           password: { label: "password", type: "password" },
//         },
//         authorize: async function (credentials, req) {
//           console.log("Authorize function")
//           console.log(credentials)
//           console.log(req)

//           if (!credentials?.email || !credentials.password) {
//             throw new Error("Invail Credentail")
//           }
//           return null

//         }
//       })
//       // ...add more providers here
//     ],
//     callbacks: {
//       session({ session, user }: {
//         session: any;
//         user: any
//       }) {
//         if (user) {
//           session.user = user;
//         }

//         return session;
//       },
//       async signIn() {
//         let additionalAuthParams =req.cookies.additionalAuthParams ? JSON.parse(req.cookies.additionalAuthParams) : ""

//         console.log("Additional Param ",additionalAuthParams.appPublicKey)
//         return true
//       },
//     },
//     session: {
//       strategy: "database",
//     },
//     secret: "giathuan",
//     adapter: PrismaAdapter(prisma1),


//   });
// }
// 
// export default NextAuth(authOptions);


export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  return NextAuth(req, res, {
    // Configure one or more authentication providers
    providers: [
      GoogleProvider({
        clientId:
          process.env.NEXT_PUBLIC_GGID as string,
        clientSecret: process.env.NEXT_PUBLIC_GGSEC as string,

      }),
      FacebookProvider({
        clientId: process.env.NEXT_PUBLIC_FBID as string,
        clientSecret: process.env.NEXT_PUBLIC_FBSEC as string,
      }),
      CredentialsProvider({
        name: "credentials",
        credentials: {
          email: { label: "email", type: "text" },
          password: { label: "password", type: "password" },
        },
        authorize: async function (credentials, req) {
          console.log("Authorize function")
          console.log(credentials)
          console.log(req)


          if (!credentials?.email || !credentials.password) {
            throw new Error("Invail Credentail")
          }
          return null

        }
      })
      // ...add more providers here
    ],
    callbacks: {
      session({ session, user, token }: {
        session: any;
        user: any
        token: any
      }) {

        // if (user) {

        //   session.user = user;

        // }

        if (session) {
          session.user.id = user.id
          session.user.token = token
        }
        return session
      },
      signIn: async function ({ account, user, credentials, email, profile }) {
        console.log("Sign In Function ")
        console.log(
          { account, user, credentials, email, profile }
        )
        // { account, user, credentials, email, profile }
        // let additionalAuthParams = JSON.parse(req.cookies?.additionalAuthParams as string).appPublicKey
        // console.log(additionalAuthParams, "additionalAuthParams")
        // let result = await UpdateToken(user.id, "INSERT", additionalAuthParams);
        return true
      }
    },
    // session: {
    //   strategy: "database",
    // },
    secret: "giathuan",
    adapter: PrismaAdapter(prisma),


  })
}

