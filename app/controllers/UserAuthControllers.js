const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/UserModel')
const userController = {}

userController.register = (req,res) =>{
    const data = req.body
    const user = new User(data)
    bcrypt.genSalt()
    .then((salt) =>{
        console.log('salt',salt)
        bcrypt.hash(data.password,salt)
        .then((encrypt) =>{
            console.log('ENCRYPTED',encrypt)
            user.password = encrypt
            user.save()
            .then((user) =>{
                res.json(user)
            })
            .catch((err) =>{
                res.json(err)
            })
        })
        .catch((err) =>{
            res.json(err)
        })
    })
    .catch((err) =>{
        console.log('err',err)
    })
   
}


// login
userController.login = (req,res) =>{
    const data = req.body
    User.findOne({ email : data.email })
    .then((user) =>{
        console.log('user',user)
        if(!user){
            res.json({ err : 'user not found'})
        }
        bcrypt.compare(data.password,user.password)
        .then((verify) =>{
            console.log('rec',verify)
            const payload = {
                _id : user._id,
                name : user.name,
                createdAt : user.createdAt
            }
            const token = jwt.sign(payload,'Kishan@2001',{ expiresIn : '2d'})
            res.json({ token : `Bearer ${token}`})
        })
        .catch((err) =>{
            res.json(err)
        })
    })
    .catch((err) =>{
        res.json(err)
    })
}

// show the record
userController.show = (req,res) =>{
    const token = req.header('Authorization').split(' ')[1]
    let result
    try{
        result = jwt.verify(token,'Kishan@2001')
        User.findById(result._id)
        .then((user) =>{
        res.json(user)
        })
        .catch((err) =>{
        res.json(err)
        })
    } catch(err){
        res.json('invalid token')
    }
    
}

// delete the record
userController.delete = (req,res) =>{
    const token = req.header('Authorization').split(' ')[1]
    let result
    try{
        result = jwt.verify(token,'Kishan@2001')
        User.findByIdAndDelete(result._id)
        .then((user) =>{
        res.json(user)
        })
        .catch((err) =>{
        res.json(err)
        })
    } catch(err){
        res.json('invalid token')
    }
}

// update a record
userController.update = (req,res) =>{
    const token = req.header('Authorization').split(' ')[1]
    let result
    try{
        result = jwt.verify(token,'Kishan@2001')
        User.findByIdAndUpdate(result._id,req.body)
        .then((user) =>{
        res.json(user)
        })
        .catch((err) =>{
        res.json(err)
        })
    } catch(err){
        res.json('invalid token')
    }
}

//all user
userController.allUser = (req,res) =>{
    User.find()
    .then((users) =>{
        res.json(users)
    })
    .catch((err) =>{
        res.json(err)
    })
}
module.exports = userController