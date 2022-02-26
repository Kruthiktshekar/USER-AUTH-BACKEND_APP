const mongoose = require('mongoose')

// db connection via function
const configDb = () =>{
    mongoose.connect('mongodb://localhost:27017/userAuth')
    .then(() =>{
        console.log('db is connected')
    })
    .catch((err) =>{
        console.log('err occured while connecting to db')
    })
}

module.exports = configDb