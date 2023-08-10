import bcrypt from "bcrypt"

export default function bcryptEncrypt(pw){
    return new Promise(async (res) => {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(pw, salt)
        res(hashedPassword)
    })
}