import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../src/utils/lib";
import { PrismaClient } from "@prisma/client"
const prisma1 = new PrismaClient()
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "../../../src/utils/lib/prisma"

export const authOptions = {
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
      authorize: async function (credentials) {
        if (!credentials?.email || !credentials.password) {
          throw new Error("Invail Credentail")
        }
        return null

      }
    })
    // ...add more providers here
  ],
  callbacks: {
    session({ session, user }) {
      if (user) {
        session.user = user;
      }

      return session;
    },
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
  },
  session: {
    strategy: "database",
  },
  secret: "giathuan",
  adapter: PrismaAdapter(prisma1),


};
export default NextAuth(authOptions);
