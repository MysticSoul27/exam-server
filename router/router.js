const express = require('express')
const userController = require('../Controller/userController')
const userDataController = require('../Controller/userDataController')
const jwtMiddleware = require('../middlewares/jwtmiddleware')

const router = new express.Router()

//register route
router.post('/register',userController.registerController)

//login route
router.post('/login',userController.loginController)

//addUserDetails
router.post('/add-userdata',jwtMiddleware,userDataController.addUserDetails)

//get registerd user
router.get('/register-user',jwtMiddleware,userController.registeredUsersController)



module.exports = router