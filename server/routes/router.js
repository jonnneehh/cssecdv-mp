import {Router} from "express"
import auth from "../controllers/auth-controller.js"
import upload from "../middlewares/upload.js"

const router = Router()

router.post('/login', auth.login)
router.post('/register', auth.register)

router.post('/upload', upload.single("displayphoto"), (req, res) => {res.send("File Uploaded")})

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



export default router 