const jwt = require('jsonwebtoken')

const jwtMiddleware = (req,res,next)=>{
    const token = req.headers["authorization"].split(" ")[1]
    console.log(token);
    

    next()
}

module.exports = jwtMiddleware