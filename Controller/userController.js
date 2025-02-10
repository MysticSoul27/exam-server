const users = require('../models/userModel')
const jwt = require('jsonwebtoken')

//register controller
exports.registerController = async (req,res)=>{
    console.log('Inside register controller');
    console.log(req.body);
    const {username,email,password} = req.body
    try {
        const existingUser = await users.findOne({email,password})
        if(existingUser){
            res.status(406).json('Already a user ...Please login')
        }else{
            const newUser = new users({
                username,email,password
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    } catch (error) {
        res.status(401).json(error)
    }
    //res.status(200).json('Register request received')
}

exports.loginController = async (req,res)=>{
    console.log("Inside login controller");
    const {email,password} = req.body
    console.log(email,password);
    try {
        const existingUser = await users.findOne({email,password})
        if(existingUser){
            const token = jwt.sign({userId:existingUser._id},process.env.JWTPASSWORD)
            res.status(200).json({
                user: existingUser,token
            })
        }else{
            res.status(404).json("Incorrect email/password")
        }
    } catch (error) {
        res.status(401).json(error)
    }
    
    //res.status(200).json("Login request received")
}

