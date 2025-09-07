
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
// const uploadImage =  require("./middleware/uploadImg")
const routerProduct = require("./Routers/prodectRouter")


require("dotenv").config()

const app = express()
app.use(express.json())
app.use(cors())

const PORT = process.env.port || 7000

mongoose.connect(process.env.DB_URL).then(()=> console.log("Sucess connect MongoDb"))

app.use(routerProduct)

app.use("/allimages", express.static("document"));



app.listen(PORT,()=> console.log(`server is running ${PORT}`))