var jwt = require("jsonwebtoken")
const Users = require("../models/userModel")
const {promisify} = require('util');
const verifyJwt = promisify(jwt.verify);

async function validateRole(req, res, next) {
    try{
      //  extract token from headers
      const token = req.headers.authorization ? req.headers.authorization.split(" ")[1] : "";
      const {id} = await verifyJwt(token,process.env.JWTSECRET);
      // find user by id
      const user = await Users.findById(id);
      //  attach user to request body
      console.log(user)
      if(user.role != "admin"){
        const error = new Error('unauthorized to visit this route ');
        error.statusCode = 401;
        return next(error)
      }
      next();	
    }catch(err){
      console.log(err)
      next(err)
    }
  }
  
  module.exports = validateRole