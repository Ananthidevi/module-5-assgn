const user = require("../model/userModel");

//jwt & bcryptjs
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUSer = async (req , res) => {
    const { username,email,password, mobilenumber,role} = req.body;
    try{
        //cond-1 -email exist or nt
        const emailCheck = await user.findOne({email});
        if(emailCheck){
            return res.status(400).json({message:"email already exists"})

        }

        //cond-2 password  hashing
        const hashedPassword = await bcrypt.hash(password, 10);//10 is a salt common number 
       
       //create new user account
    
        const newUser = new user({username, email, password:hashedPassword , mobilenumber, role});
        await newUser.save();
        res.status(201).json({message: "user account created", newUser});

    }catch(err){
        console.log(err.message);
        res.status(500).json({message:'failed'});
    }
};

const loginUser = async (req,res) => {
const {email , password} = req.body;
try{
    //step-1 check the email is registred or not 
    const usermodel= await user.findOne({email});
   
    if(!usermodel){
        return res.status(404).json({message:"account not found"});

    }
    
    //stp-2:passw check
    const passwordMatch = await bcrypt.compare(password, usermodel.password);
    
    if(!passwordMatch){
        return res.status(401).json({message:"password mismatch"});
    }


//stp-3 token genenration
const token = jwt.sign(
    {userId: usermodel._id, username: usermodel.username,email:usermodel.email,number:usermodel.mobilenumber,role:usermodel.role} , 
process.env.jwtsecretkey,
{expiresIn:'24h'}
)
res.status(500).json({message:"login success",token});

}catch(err){
    console.log(err.message);
    res.status(500).json({message:"login failed"});
}
}
module.exports = {registerUSer,loginUser};