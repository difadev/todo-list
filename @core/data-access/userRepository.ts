const users = [
    {
        email: 'tes@gmail.com',
        password: 'password'
    },
    {
        email: 'boy@gmail.com',
        password: 'password'
    }
]

export const getUserEmail = (email:string) => {
    const found = users.find(user => user.email === email)
    return found;
}