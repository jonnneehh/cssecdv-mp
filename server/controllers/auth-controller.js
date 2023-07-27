import createError from "http-errors"
import db from "../models/db.js"

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
            const doesUserExist = await User.findOne({username: userResult.username})
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
            const bcryptpassword = await async function(){
                const salt = await bcrypt.genSalt(10)
                const hashedPassword = await bcrypt.hash(userResult.password, salt)
                return hashedPassword
            }

            const data = {
                username: userResult.username,
                firstName: userResult.firstname,
                lastName: userResult.lastname,
                email: userResult.email,
                mobileNum: userResult.mobilenum,
                password: bcryptpassword,
                profilePhoto: 'temporary.png',
            }
            
            console.log(data)
            //db.insertOne(data)
    
        }catch(e){
            res.send(e) 
        }
    },

    login: async (req, res) => {
        try{
            const result = req.body
    
            const user = await User.findOne({username: result.username})
            
            //Check if user exists
            if (!user) res.send({status: 400, message: 'User not registered'})
    
            //Check if password is good 
            const isMatch = await user.isValidPassword(result.password)
            if(!isMatch) res.send({status: 401, message: "Invalid Username/Password"})
            
            //Change user isactive to true
              

            //Check role
            
            console.log("LOGIN: Seems like all is good...")
            //
            res.send({
                status: 200, 
                success: true,
                role: user.role,  
            }) 
        }catch(e){ 
            //res.send(e)
        }
    }
}

export default controller