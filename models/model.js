const mongoose = require("mongoose")
const clientSchema = mongoose.Schema

const clientTemp = new clientSchema({
    name:{
        type:String,
        required:true
    },
    surname:{
        type:String,
        required:true
    },
    cell:{
        type:String,
        required:true
    },
    code:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    balance:{
        type: Number,
        required:true
    }
})

module.exports = mongoose.model("client", clientTemp)

