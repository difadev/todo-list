import { UserLogin } from "@/@core/entity/user.interface";

const users = [
    {
        id: '1',
        email: 'tes@gmail.com',
        password: 'password'
    },
    {
        id: '2',
        email: 'boy@gmail.com',
        password: 'password'
    }
]

class UserLoginRepository {
    async getUserEmail(email:string):Promise<UserLogin|null> {
        const found:any = users.find(user => user.email === email)
        return found;
    }
}
export default new UserLoginRepository();