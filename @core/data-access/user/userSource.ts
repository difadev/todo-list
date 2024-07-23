const users = [
    {
        email: 'tes@gmail.com',
        password: '$2b$10$HFOcW6gsNKyUImEx7l9yaOxTAPhk7BkhH40duR5I7LKb2We2t8ZuC'
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