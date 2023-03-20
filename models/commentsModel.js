const { date } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// schema
const commentsSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: [true, 'the comment body is required !']
    },
    post:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'Posts'
    },
    user:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'Users'
    }
});


var Comments = mongoose.model("Comments", commentsSchema);
module.exports  = Comments;