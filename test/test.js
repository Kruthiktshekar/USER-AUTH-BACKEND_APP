// const bcrypt = require('bcryptjs')
// bcrypt.genSalt()
// .then((salt) =>{
//     console.log('res',salt)
//     bcrypt.hash('kishan@2001',salt)
//     .then((encrypt) =>{
//         console.log('encrypted',encrypt)
//     })
//     .catch((err) =>{
//         console.log('err',err)
//     })
// })
// .catch((err) =>{
//     console.log('err',err)
// })

const jwt = require('jsonwebtoken')
const payload = {
    id : 1,
    name : 'xyz',
    createdAt : '154534'
}
const result = jwt.sign(payload,'kishan@2001',{ expiresIn : '2d'})
console.log(result)
/* 
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Inh5eiIsImNyZWF0ZWRBdCI6IjE1NDUzNCIsImlhdCI6MTY0NTMzMjAyNywiZXhwIjoxNjQ1NTA0ODI3fQ.16mPFNJ-9a2mYFJlLxnSOKzW3ND7I1YAlcGheW-hbkE
*/

const re = jwt.verify(result,'kishan@2001')
console.log('re',re)