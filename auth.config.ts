import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "./schemas";
import getUserLogin from "./@core/usecases/user/getUserLogin";
import { NextAuthConfig } from "next-auth";
// import bcrypt from "bcryptjs";

export default  {
    providers: [
        Credentials({
          async authorize(credentials:any) {
            const validateFields = LoginSchema.safeParse(credentials);
            if(validateFields.success) {
                const {email, password} = validateFields.data;
                const user:any = await getUserLogin.execute(email)
                if(user) {
                  return user;
                  // const isMatch = await bcrypt.compare(
                  //   password,
                  //   user.password
                  // );
                  // if(isMatch) return user;
                } 
            }
            return null;
          } 
        }),
      ],
} satisfies NextAuthConfig;