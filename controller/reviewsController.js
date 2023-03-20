const Reviews = require("../models/reviewsModel")




async function add(req){
    var reviews = new Reviews ({
        review : req.body.review,
        post : req.body.post,
        user: req.user._id
    })
   await reviews.save()
   return reviews
}
async function get(req){
    var reviews = await Reviews.find({user:req.user._id});
    return reviews
}
async function show(id){
    var review = await Reviews.findById(id);
    return review
}
async function update(data,id){
    var data = data
    var review = await Reviews.findByIdAndUpdate(id ,data );
    return review
}
async function remove(id){
    var review = await Reviews.findByIdAndRemove(id);
    return review
}

module.exports = {add,get,show,update,remove}


