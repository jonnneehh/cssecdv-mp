import getUserAuth from "../models/db_auth.js"

const controller = {
    userAuthentication: async (req, res) => {
        const userId = req.body.userId
        if (userId) { 
            req.user = await getUserAuth(userId)
        }   
        console.log(req.user)
        res.sendStatus(200)
    },

    getUser: async(req, res) => {
        console.log(req.user)
        res.send(req.user)
    }
}

export default controller