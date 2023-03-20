const { date } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// schema
const postsSchema = new mongoose.Schema({
    body: {
        type: String,
        required: [true, 'the body is required !']
    },
    user:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'Users'
    }
});


var Posts = mongoose.model("Posts", postsSchema);
module.exports  = Posts;