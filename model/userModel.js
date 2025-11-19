const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true

    },
    role:{
        type:String,
        enum: ['admin','user'],
        required:true
    },
    mobilenumber:{
        type: Number,
        required: true

    },
});

const User = mongoose.model("authentication",userSchema);//authentication-collection name
module.exports=User;