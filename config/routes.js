const express = require('express')
const userController = require('../app/controllers/UserAuthControllers')
const route = express.Router()

// define the method,route and controllers
route.post('/register',userController.register)
route.post('/login',userController.login)
route.get('/user',userController.show)
route.get('/users',userController.allUser)
route.delete('/deleteUser',userController.delete)
module.exports = route