//model interact with db,not schema

const mongoose=require("mongoose")

const addressSchema=new mongoose.Schema(
    {
        houseNumber:Number,
        landmark:String,
        pinCode:String
})
//schema
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    interest:{//One-to-One relationship
        type:String,
        //enum ensures that the field can only contain one of the predefined values.
        enum:["frontend","backend","fullstack"]
    },
    marks:{
        type:Number,
        min:0,
        max:100
    },
    address:[addressSchema],//One-to-Many relationship
    isActive:Boolean,
    role:{
        type:String,
        require:true,
        enum:["student","mentor","admin"],
        default:"student"//if no role assigned
    },clubs:[mongoose.Schema.Types.ObjectId]
    
},{timestamps:true}) //see in definitions


const User=new mongoose.model("user",userSchema)

module.exports=User