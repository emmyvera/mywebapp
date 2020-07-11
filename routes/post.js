const router = require("express").Router()
const Post = require("../model/postModel")

//TODO get all post
//TODO get single post
//TODO create new post
//TODO update existing post
//TODO delete post

router.get("/", async(req, res) => {
    res.json({
        message: "We are live people!"
    })
})

module.exports = router