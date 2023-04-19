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

export const authOptions: AuthOptions = {
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
    session({ session, user }: {
      session: any;
      user: any
    }) {
      console.log("CallBack signIN")
      if (user) {
        
        session.user = user;
        
      }

      return session;
    },
   
  },
  session: {
    strategy: "database",
  },
  secret: "giathuan",
  adapter: PrismaAdapter(prisma),


};


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
export default NextAuth(authOptions);
