const express = require('express');
const router = express.Router();
const Posts = require("../controller/postsController")
const RouteTokenValidator = require("../middleware/validateToken")


// add task
router.post('/', RouteTokenValidator, async (req, res, next) => {
    try{
        var post = await Posts.add(req)
       res.send("added successfully")
    }catch(err){
        next(err)
    }
})
  
// all taske for loged user 
router.get('/', RouteTokenValidator , async (req, res, next) => {
    try{
        var posts = await Posts.get(req)
        res.send(posts)
    }catch(err){
        next(err)
    }
  
})

router.get('/:id', RouteTokenValidator , async (req, res, next) => {
    try{
        var post = await Posts.show(req.params.id)
        res.send(post)
    }catch(err){
        next(err)
    }
})



   
router.put('/:id',  RouteTokenValidator ,async (req, res, next) => {
    try{
        var id = req.params.id
        var data = req.body
        var post = await Posts.update(data,id)
        res.send("updated successfully !")
    }catch(err){
        next(err)
    }
})

router.delete('/:id', RouteTokenValidator ,   async (req, res, next) => {
    try{
        var post = await Posts.remove(req.params.id)
        res.send("deleted successfully !")
    }catch(err){
        next(err)
    }
})

module.exports = router