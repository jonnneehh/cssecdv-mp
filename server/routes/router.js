import {Router} from "express"
import User from "../models/UserSchema.js"
import db from "../models/db.js"

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

router.post('/login', (req, res) => {
    const {username, password} = req.body

    //Do some bcrypt on password here

    console.log(username, password)
})

router.post('/register', async (req, res) => {
    const result = req.body

    var errMessage = ""
    
    //Find existing username
    const doesUserExist = await User.findOne({username: result.username})
    if(doesUserExist) errMessage = "Username already exists!"

    //Check if email is valid
    var emailRegex = new RegExp("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")
    if(!emailRegex.test(result.email)){
        errMessage = "Email is not valid!"
    }

    //Check if mobile number is valid
    var mobileNumRegex = new RegExp("^(09|\\+639)\\d{9}$")
    if(!mobileNumRegex.test(result.mobilenum)) { 
        errMessage = "Mobile number is not valid!"
    }

    //Check if password = confirmpass 
    if(result.password != result.confirmpass){
        errMessage = "Password and Confirmed Password do not match!" 
    }    
    
    //Do some bcrypt on password here 
 

    //Add user to database
    if(!errMessage){
        const user = new User(result)
        const savedUser = await user.save()
        res.send({status: 200, message: "Success!"})
    }
    else{
        res.send({status: 400, message: errMessage}) 
    }
})

router.post('/TEMPORARYaddUser', (req, res) => { 

})

export default router 