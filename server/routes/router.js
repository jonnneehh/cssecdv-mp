const express = require('express')
const router = express.Router()
const User = require('../models/UserSchema.js')

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
    
    console.log(username, firstname, lastname, email, mobilenum, password, confirmpass)
    
    
    //Do some bcrypt on password here
    
})

router.post('/TEMPORARYaddUser', (req, res) => {

})
module.exports = router