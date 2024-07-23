import { UserLogin, UserRegister } from "@/@core/entity/user.interface";

const users = [
    {
        id: '1',
        email: 'tes@gmail.com',
        password: '$2b$10$HFOcW6gsNKyUImEx7l9yaOxTAPhk7BkhH40duR5I7LKb2We2t8ZuC'
    },
    {
        id: '2',
        email: 'boy@gmail.com',
        password: 'password'
    }
]

class UserAuthRepository {
    async getUserEmail(email:string):Promise<UserLogin|null> {
        const found:any = users.find(user => user.email === email)
        return found;
    }
    async registerUser(data:UserRegister):Promise<UserRegister|null> {
        return data;
    }
}
export default new UserAuthRepository();