'use server'
import { signIn } from "@/auth";
import * as z from 'zod'
import { LoginSchema } from "@/schemas";
import { AuthError } from "next-auth";

export async function doCredentialLogin(values:z.infer<typeof LoginSchema>) {
    const validateFields = LoginSchema.safeParse(values)
    if(!validateFields.success) {
        return {error: 'Invalid Fields !'}
    }
    try {
      const response = await signIn("credentials", {
          email: values.email,
          password: values.password,
          redirect: false
      })
      return response;
    } catch(error:any) {
      if(error instanceof AuthError) {
        switch(error.type) {
          case "CallbackRouteError":
            return {error: 'Invalid credentials !'}
            default:
              return {error: 'Something went wrong !'}
        }
      }
      throw error;
    }
}