const userdatas = require('../models/userDetailsModel')

exports.addUserDetails = async (req,res)=>{
    console.log('Inside add user detils controller');
    console.log(req.body);
    const {name,email,phoneNumber} = req.body
    const userId = req.userId
    console.log(userId);
    try {
        const existingUser = await userdatas.findOne({phoneNumber})
        if(existingUser){
            res.status(406).json("Already existing user")
        }else{
            const newUser = new userdatas({
                name,email,phoneNumber,userId
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    } catch (error) {
        res.status(401).json(error)
    }
    //res.status(200).json('Adding user data')
}

exports.registeredUsersController = async (req,res)=>{
    console.log('Inside registered user controller');
    try {
        const allRegisteredUser = await userdatas.find()
        res.status(200).json(allRegisteredUser)
    } catch (error) {
        res.status(401).json(error)
    }
}

exports.getUserData = async (req,res) => {
    console.log('Inside get user data');
    const id = req.params.id
    console.log(id);
    try {
        const userData = await userdatas.findOne({_id:id})
        res.status(200).json(userData)
    } catch (error) {
        res.status(401).json(error)
    }
    //res.status(200).json('Userdata')
    
}