const Comments = require("../models/commentsModel")




async function add(req){
    var Comment = new Comments ({
        comment : req.body.comment,
        post : req.body.post,
        user: req.user._id
    })
   await Comment.save()
   return Comment
}
async function get(req){
    var comments = await Comments.find({user:req.user._id});
    return comments
}
async function show(id){
    var comment = await Comments.findById(id);
    return comment
}
async function update(data,id){
    var data = data
    var comment = await Comments.findByIdAndUpdate(id ,data );
    return comment
}
async function remove(id){
    var comment = await Comments.findByIdAndRemove(id);
    return comment
}

module.exports = {add,get,show,update,remove}


