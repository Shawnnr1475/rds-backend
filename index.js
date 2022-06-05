const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()
const PORT = 5000
const adminRoutes = require("./routes/adminroutes")
const cors = require("cors")
const bodyParser = require("body-parser")

 
mongoose.connect(process.env.DATABASE_ACCESS,()=>{
    console.log("Connected to Database")
});


app.use(cors())
app.use(bodyParser.json())
app.use(adminRoutes)

app.listen(process.env.PORT || PORT,()=>{console.log(`Listening at port ${PORT}`)})

