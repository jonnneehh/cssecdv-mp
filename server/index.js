import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import router from "./routes/router.js"
import db_initalize from "./models/db_init.js"
import dotenv from 'dotenv'

dotenv.config()

const app = express() 

// app.use(limitter({
//     windowMS: 5000,
//     max: 10 
// }))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

const corsOptions = {
    origin: "*",
    credentials: true,
    optionSucessStatus: 200
}
app.use(cors(corsOptions))

app.use("/", router)

db_initalize() 

const port = process.env.PORT
app.listen(port, () => {
    console.log("Server is running on port " + port)
})


  
 