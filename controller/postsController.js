const Posts = require("../models/postsModel")
const Comments = require("../models/commentsModel")
const Reviews = require("../models/reviewsModel")



async function add(req){
    var Task = new Posts ({
        body : req.body.body,
        user: req.user._id
    })
   await Task.save()
   return Task
}
async function get(req){
    var posts = await Posts.find({user:req.user._id});
    return posts
}
async function show(id){
    var post = await Posts.findById(id);
    var comment = await Comments.find({post:post._id})
    var Review = await Reviews.find({post:post._id})
    var post = {"post":post, "comments":comment, "Reviews":Review}
    return post
}
async function update(data,id){
    var data = data
    var post = await Posts.findByIdAndUpdate(id ,data );
    return post
}
async function remove(id){
    var post = await Posts.findByIdAndRemove(id);
    return post
}

module.exports = {add,get,show,update,remove}
