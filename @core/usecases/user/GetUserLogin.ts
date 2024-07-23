import UserAuthRepository from '@/@core/repositories/user/userAuth'

class GetUserUsecase {
    async execute(email:string) {
        return await UserAuthRepository.getUserEmail(email);
    }
}

export default new GetUserUsecase();