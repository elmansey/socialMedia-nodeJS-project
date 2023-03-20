const express = require('express');
const router = express.Router();
const Comments = require("../controller/commentsController")
const RouteTokenValidator = require("../middleware/validateToken")


// add task
router.post('/', RouteTokenValidator, async (req, res, next) => {
    try{
        var comment = await Comments.add(req)
       res.send("added successfully")
    }catch(err){
        next(err)
    }
})
  
// all taske for loged user 
router.get('/', RouteTokenValidator , async (req, res, next) => {
    try{
        var comments = await Comments.get(req)
        res.send(comments)
    }catch(err){
        next(err)
    }
  
})

router.get('/:id', RouteTokenValidator , async (req, res, next) => {
    try{
        var comment = await Comments.show(req.params.id)
        res.send(post)
    }catch(err){
        next(err)
    }
})



   
router.put('/:id',  RouteTokenValidator ,async (req, res, next) => {
    try{
        var id = req.params.id
        var data = req.body
        var comment = await Comments.update(data,id)
        res.send("updated successfully !")
    }catch(err){
        next(err)
    }
})

router.delete('/:id', RouteTokenValidator ,   async (req, res, next) => {
    try{
        var comment = await Comments.remove(req.params.id)
        res.send("deleted successfully !")
    }catch(err){
        next(err)
    }
})



module.exports = router