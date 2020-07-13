const router = require("express").Router()
const Category = require("../model/categoryModel")

//TODO get all category
router.get("/", async(req, res) => {
    try{
        const category = await Category.find({})
        res.json({
            message:"Success",
            category:category
        })
    }catch(err){
        console.log(err)
    }
})

//TODO get single category
router.get("/:id", async(req, res) => {
    try{
        const category = await Category.findOne({_id:req.params.id})
        res.json({
            message:"Success",
            category:category
        })
    }catch(err){
        console.log(err)
    }
})

//TODO create new category
router.post("/", async(req, res) => {
    const { title, pic, author } = req.body

    const category = new Category({
        title,
        pic,
        author
    })

    try{
        const cateSave = await category.save()
        res.json({
            message:"Success",
            category: cateSave
        })
    }catch(err){
        console.log(err)
    }

})

//TODO update existing category
router.put("/:id", async(req, res) => {
    try{
        const categorySave = await Category.findOneAndUpdate(
            {_id:req.params.id},
            req.body
        );
        res.json({
            message: "Success",
        })
    }catch(err){
        console.log(err)
    }
});

//TODO delete category

module.exports = router;