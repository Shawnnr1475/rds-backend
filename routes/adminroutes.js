const express = require("express")
const Router = express.Router()
const Client = require("../models/model")

// Create new Client
Router.post("/newclient",(req,res)=>{
    const newclient = new Client({
        name:req.body.name,
        surname:req.body.surname,
        cell:req.body.cell,
        code:req.body.code,
        type:req.body.type,
        balance:req.body.balance
    }).save()
    .then(result=>{
        console.log(result)
        res.status(200)
    })
    .catch(err =>{
        console.log(err)
    })
})

// Read all the Client from the database
Router.get("/new",(req,res)=>{
    res.send("hello")
})

Router.get("/clients",(req,res)=>{
    Client.find({},(err,data)=>{
        if(err){
            console.log("error occured when fetching data")
        }
        else{
            res.send(data)
        }
    })
})

// Update a Client information
Router.post("/client/:_id",(req,res)=>{
    Client.findOneAndUpdate({"_id":req.params._id},{
       name:req.body.name,
        surname:req.body.surname,
        cell:req.body.cell,
        code:req.body.code,
        type:req.body.type
        },{new:true})
    .then(results=>{
        res.status(200)
    })
    .catch(err=>{
        console.log(err)
    })
})


//Delete a Client from the database
Router.delete("/client/:_id",(req,res)=>{
    Client.deleteOne({"_id":req.params._id})
    .then(results=>{
        console.log(results)
    })
    .catch(err=>{
        console.log(err)
    })
})


module.exports = Router


