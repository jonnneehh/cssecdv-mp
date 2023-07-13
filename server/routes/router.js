import {Router} from "express"
import User from "../models/UserSchema.js"
import createError from "http-errors"

const router = Router()

router.get('/products', (req, res) => {
    const products = 
    [
        {
            id: "TC-123",
            name: "Tea Cup",
            description: "A tea cup made of ceramic",
            category: "Glassware",
            cost: 30.00,
            quantity: 4
        },
        {
            id: "TP-421",
            name: "Tea Pot",
            description: "A tea pot made of glass",
            category: "Glassware",
            cost: 100.00,
            quantity: 2
        },
        {
            id: "TP-875",
            name: "Tea Spoon",
            description: "A tea spoon made of silver",
            category: "Utensils",
            cost: 9.99,
            quantity: 34
        }
    ]

    res.send(products)
})

router.post('/login', async (req, res) => {
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
})

router.post('/register', async (req, res) => {
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

        //Check if password = confirmpass 
        if(result.password != result.confirmpass) throw createError[500]("Password and Confirm Password do not match")

        const user = new User(result)
        const savedUser = await user.save()
        res.send({status: 200, message: "Success!"})
        
    }catch(e){
        res.send(e)
    }
})

export default router 