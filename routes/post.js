const router = require("express").Router()
const Post = require("../model/postModel")
const Category = require("../model/categoryModel")

// get all post
router.get("/", async(req, res) => {
    try{
        const post = await Post.find({})
        res.json({
            message: "Success",
            post:post
        })
    }catch(err){
        console.log(err)
    }
})

// get single post
router.get("/:id", async(req, res) => {
    try{
        const post = await Post.findOne({_id:req.params.id})
        res.json({
            message:"Success",
            post:post
        })
    }catch(err){
        console.log(err)
    }
})

// create new post
router.post("/", async(req, res) => {
    const { title, details, category, pic, author } = req.body;

    const post = new Post({
        title,
        details,
        category,
        pic,
        author
    });

    try{
        let check = await Category.findOne({title:category})

        if(!undefined & check.title == category){
            const homeSave = await post.save()
            res.json({
                message:"Success",
                homeSave:homeSave,
                status:201
            })
        }else{
            res.json({
                message: "Didn't Save"
            })
            console.log(check)
        }
    }catch(err){
        //TODO HAndle 404 errors
        console.log(err)
    }
});

//update existing post
//TODO HAndle 404 errors
router.put("/:id", async(req, res) => {
    try{
        const postSave = await Post.findOneAndUpdate(
            {_id:req.params.id},
            req.body
        );
        res.json({
            message: "Success",
            post: postSave
        })
    }catch(err){
        console.log(err)
    }
});

// delete post
router.delete("/:id", async (req, res) => {
    try{
        const postDel = await Post.findOneAndDelete(
            {_id:req.params.id});
        res.json({
            message:"Success",
            post:postDel
        })
    }catch(err){
        console.log(err)
    }
})

module.exports = router