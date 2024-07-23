'use server'
import * as z from 'zod'
import { RegisterSchema } from "@/schemas";
// import bcrypt from "bcryptjs";
import { RegisterUserUsecase } from "@/@core/usecases/user/registerUser";

export async function doRegister(values:z.infer<typeof RegisterSchema>) {
    const validateFields = RegisterSchema.safeParse(values)
    if(!validateFields.success) {
        return {error: 'Invalid Fields !'}
    }
    const {email, password, fullName} = validateFields.data;
    // const hashedPassword = await bcrypt.hash(password, 10);
    const dataPayload = {
      email,
      password,
      fullName
    }
    const data = await RegisterUserUsecase(dataPayload);
    return data;
}