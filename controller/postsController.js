const Posts = require("../models/postsModel")
const Comments = require("../models/commentsModel")


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
    console.log(comment)
    var post = {"post":post, "comments":comment}
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



//ali
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTA5Y2QxNDkwM2MwNGFhM2M5M2NjMiIsImlhdCI6MTY3ODgxMDMyNywiZXhwIjoxNjc4ODEzOTI3fQ.Pq2oa6yxa-xiGXQjlrtpSZxYbGuWEcj_fqYT-tPAqdg 



//abdelrahman
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTA5Y2M1NDkwM2MwNGFhM2M5M2NjMCIsImlhdCI6MTY3ODgxMDM1MywiZXhwIjoxNjc4ODEzOTUzfQ.QtSPsiTTFI_LHQTUtxn_0CIMMJ7Jm7ruporfKCMVB6E