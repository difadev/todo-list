import userLoginRepository from '@/@core/repository/user/userLogin'

class GetUserUsecase {
    async execute(email:string) {
        return await userLoginRepository.getUserEmail(email);
    }
}

export default new GetUserUsecase();