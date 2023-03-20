const express = require('express');
const router = express.Router();
const Reviews = require("../controller/reviewsController")
const RouteTokenValidator = require("../middleware/validateToken")


// add task
router.post('/', RouteTokenValidator, async (req, res, next) => {
    try{
        var review = await Reviews.add(req)
       res.send("added successfully")
    }catch(err){
        next(err)
    }
})
  
// all taske for loged user 
router.get('/', RouteTokenValidator , async (req, res, next) => {
    try{
        var reviews = await Reviews.get(req)
        res.send(reviews)
    }catch(err){
        next(err)
    }
  
})

router.get('/:id', RouteTokenValidator , async (req, res, next) => {
    try{
        var review = await Reviews.show(req.params.id)
        res.send(post)
    }catch(err){
        next(err)
    }
})



   
router.put('/:id',  RouteTokenValidator ,async (req, res, next) => {
    try{
        var id = req.params.id
        var data = req.body
        var review = await Reviews.update(data,id)
        res.send("updated successfully !")
    }catch(err){
        next(err)
    }
})

router.delete('/:id', RouteTokenValidator ,   async (req, res, next) => {
    try{
        var review = await Reviews.remove(req.params.id)
        res.send("deleted successfully !")
    }catch(err){
        next(err)
    }
})



module.exports = router