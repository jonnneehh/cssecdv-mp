const express = require('express')
const router = express.Router()

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

    console.log(username, password)
})

module.exports = router