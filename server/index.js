import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import router from "./routes/router.js"
import db from "./models/db.js"

import { envPort } from "./config.js"

const app = express() 

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

const corsOptions = {
    origin: "*",
    credentials: true,
    optionSucessStatus: 200
}
app.use(cors(corsOptions))

app.use("/", router)

db.connect()

const port = envPort || 4000
const server = app.listen(port, () => {
    console.log("Server is running on port " + port)
})

  
 