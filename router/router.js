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
router.get('/registered-user',jwtMiddleware,userDataController.registeredUsersController)

//inidividual data
router.get('/registered/:id/user',jwtMiddleware,userDataController.getUserData)


module.exports = router