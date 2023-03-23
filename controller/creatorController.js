const Users = require("../models/userModel")
var jwt = require("jsonwebtoken")




async function addCreator(data){
    console.log(data)
    var {username,email,password} = data
    var user = new Users ({
        username ,
        email ,
        password,
        role:"creator"
    })
   await user.save()
   return user
}
// all users 
async function get(){
    var users = await Users.find({role:"creator"});
    return users
}
async function show(id){
    var user = await Users.findById(id);
    var Post = await Posts.find({user:user._id})
    var user = {"user":user, "Posts":Post}
    return user
}
async function update(id,data){
    var user = await Users.findOneAndUpdate(id,data );
    return user
}
async function remove(id){
    var user = await Users.findByIdAndRemove(id);
    return user
}


module.exports = {get,show,update,remove, addCreator}