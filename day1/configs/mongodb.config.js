//for connecting with db
const mongoose=require("mongoose")
const User=require("../models/user.model");
 
const connectToDB=async ()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/Sem3DB")
        console.log("connected to DB")

        // //Basic crud//not part of Project
        // const users=await User.find()
        // console.log("users: ",users)

        // const newUser={
        //     name:"a",
        //     email:"a@gmail.com",
        //     interest:"backend",
        //     marks:80,
        //     address:[{
        //         houseNumber:7,
        //         landmark:"White field",
        //         pinCode:"560066"
        //     }],
        //     isActive:true
        // }
        // //create vs insertOne
        // const user=await User.create(newUser )

    } catch (error) {
        console.error("error in connecting db...",error);
    }
}

module.exports= connectToDB;