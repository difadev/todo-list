import NextAuth from "next-auth"
import authConfig from './auth.config'
// Your own logic for dealing with plaintext password strings; be careful!

 
export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: 'jwt'
  },
  ...authConfig
})