import createError from "http-errors"
import db_users from "../models/db_users.js"

const controller = {
    register: async(req, res) => {
        try{ 
            const resultFileType = req.body.dpfiletype
            const userResult = {
                username: req.body.username,
                firstname: req.body.firstname,
                lastname: req.body.lastname, 
                email: req.body.email,
                mobilenum: req.body.mobilenum,
                password: req.body.password,
                confirmpass: req.body.confirmpass,
            }
            
            //Find existing username
            const doesUserExist = await db_users.findUser({username: userResult.username})
            if(doesUserExist) throw createError[500]("User already exists")
    
            //Check if email is valid
            var emailRegex = new RegExp("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")
            if(!emailRegex.test(userResult.email)) throw createError[500]("Invalid Email Format")
            
            //Check if mobile number is valid
            var mobileNumRegex = new RegExp("^(09|\\+639)\\d{9}$")
            if(!mobileNumRegex.test(userResult.mobilenum)) throw createError[500]("Invalid Mobile Number Format")
             
            //Check if file is valid
            const allowed = ["image/jpeg", "image/jpg", "image/png"]
            if(!allowed.includes(resultFileType)) throw createError[500]("Display Photo Filetype is incorrect")

            //Check if password = confirmpass 
            if(userResult.password != userResult.confirmpass) throw createError[500]("Password and Confirm Password do not match")
            

            //IF NO ERRORS:
            console.log("REGISTER: No errors found!")
            const data = {
                username: userResult.username,
                firstName: userResult.firstname,
                lastName: userResult.lastname,
                email: userResult.email,
                mobileNum: userResult.mobilenum,
                password: userResult.password,
                profilePhoto: 'temporary.png',
            }

            await db_users.insertUser(data)
            res.send(data)
        }catch(e){
            res.send(e) 
        }
    },

    login: async (req, res) => {
        try{
            const result = req.body

            //Check if user exists
            const doesUserExist = await db_users.findUser({username: result.username})
            if (!doesUserExist) res.send({status: 400, message: 'User not registered'})

            //Check if password is good 
            const validPassword = await db_users.validateUser(result)
            if(!validPassword) res.send({status: 401, message: "Invalid Username/Password"}) 
            
            //Get user role
            const id = await db_users.getUserId({username: result.username})

            res.send({
                status: 200, 
                success: true,
                userId: id,
            }) 
        }catch(e){ 
            console.error(e)
        }
    }
}

export default controller