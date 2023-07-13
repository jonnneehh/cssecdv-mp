import {Router} from "express"
import User from "../models/UserSchema.js"

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

router.post('/register', (req, res) => {
    const {username, firstname, lastname, email, 
           mobilenum, password, confirmpass} = req.body
    
    const errMessage = ""

    console.log(username, firstname, lastname, email, mobilenum, password, confirmpass)
    
    //Find existing username
    

    //Check if email is valid
    var emailRegex = "^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
    if(!emailRegex.test(email)){
        errMessage = "Email is not valid!"
    }

    //Check if mobile number is valid
    var mobileNumRegex = "/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/"
    if(!mobileNumRegex.test(mobilenum)) {
        errMessage = "Mobile number is not valid!"
    }

    //Check if password = confirmpass
    if(password != confirmpass){
        errMessage = "Password and Confirmed Password do not match!"
    }    
    
    //Do some bcrypt on password here
    
    //Add user to database
})

router.post('/TEMPORARYaddUser', (req, res) => {

})

export default router