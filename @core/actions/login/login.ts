'use server'
import { signIn } from "@/auth";

export async function doCredentialLogin(formData:FormData) {
    try {
        const response = await signIn("credentials", {
            email: formData.get('email'),
            password: formData.get('password'),
            redirect: false
        })
        return response;
    }catch(error:any) {
        throw error;
    }
}