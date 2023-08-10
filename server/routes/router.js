import {Router} from "express"
import auth from "../controllers/auth-controller.js"
import posts_controller from "../controllers/posts-controller.js"
import upload from "../middlewares/upload.js"
import user_controller from "../controllers/user-controller.js"

const router = Router()

router.post('/userauth', user_controller.userAuthentication)
router.get('/getUser', user_controller.getUser)

router.post('/login', auth.login)
router.post('/register', auth.register)

router.post('/upload', upload.single("image"), (req, res) => {})

router.get('/products', posts_controller.getPosts)
router.post('/products', posts_controller.updatePost)




export default router  