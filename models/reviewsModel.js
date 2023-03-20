const { date, number } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// schema
const reviewSchema = new mongoose.Schema({
    review: {
        type: Number,
        enum:[1,2,3,4,5],
        required: [true, 'the review is required !']
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


var Reviews = mongoose.model("Reviews", reviewSchema);
module.exports  = Reviews;