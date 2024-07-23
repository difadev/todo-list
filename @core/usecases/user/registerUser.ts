import { UserRegister } from '@/@core/entity/user.interface';
import UserAuthRepository from '@/@core/repositories/user/userAuth'

export const RegisterUserUsecase = async (dataPayload:UserRegister) => {
  try {
    const data = await UserAuthRepository.registerUser(dataPayload);
    return data;
  } catch (error:any) {
    return {
      error: `Something went wrong: ${error.message}`
    }
  }
}