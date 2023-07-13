import User from "../models/UserSchema.js"
import createError from "http-errors"

const controller = {
    register: async(req, res) => {
        try{
            const result = req.body

            //Find existing username
            const doesUserExist = await User.findOne({username: result.username})
            if(doesUserExist) throw createError[500]("User already exists")
    
            //Check if email is valid
            var emailRegex = new RegExp("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")
            if(!emailRegex.test(result.email)) throw createError[500]("Invalid Email Format")
            
            //Check if mobile number is valid
            var mobileNumRegex = new RegExp("^(09|\\+639)\\d{9}$")
            if(!mobileNumRegex.test(result.mobilenum)) throw createError[500]("Invalid Mobile Number Format")
             
            //Check if file is valid
            

            //Check if password = confirmpass 
            if(result.password != result.confirmpass) throw createError[500]("Password and Confirm Password do not match")
            

            const user = new User(result)
            const savedUser = await user.save() 
            res.send({status: 200, message: "Success!"})
    
        }catch(e){
            res.send(e)
        }
    },

    login: async (req, res) => {
        try{
            const result = req.body
    
            const user = await User.findOne({username: result.username})
            
            //Check if user exists
            if (!user) throw createError.NotFound('User not registered')
    
            //Check if password is good
            const isMatch = await user.isValidPassword(result.password)
            if(!isMatch) throw createError.Unauthorized("Invalid Username/Password")
            
            res.send({status: 200, message: "Success!"})
        }catch(e){ 
            res.send(e)
        }
    }
}

export default controller