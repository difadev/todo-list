import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { getUserEmail } from "./@core/data-access/userRepository"
import getUserLogin from "./@core/usecase/user/getUserLogin";
import { UserLogin } from "./@core/entity/user.interface";
// Your own logic for dealing with plaintext password strings; be careful!

 
export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: 'jwt'
  },
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials:any) {
        if(credentials === null) return null;
        try {
          const user:any = await getUserLogin.execute(credentials?.email)
          console.log("Ys", user)
          if(user) {
              const isMatch = user.password === credentials.password;
              if(isMatch) return user;
              else throw new Error('Check your password')
          } else {
            console.log("Error")
            throw new Error('User not found')
          }
        }catch(error:any) {
          throw new Error(error) 
        }
      } 
    }),
  ],
})