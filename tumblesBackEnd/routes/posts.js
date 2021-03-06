var express = require('express');
var router = express.Router();

const {getAllPosts,getSinglePost,getPostsByTag,createPosts,deletePost} = require("../db/queries/PostsQueries.js")

router.post("/",createPosts)
router.get("/",getAllPosts);
router.get("/:id", getSinglePost)
router.get("/tag/:id",getPostsByTag)
// router.put("/:id", updatePosts)
router.delete("/:id",deletePost)
module.exports = router;

// createPosts,updatePosts,



// router.get("/:id/posts",getAllPostsByPosts)
// ^ I have this get at line 11 because I think I will incoporate it here. Not quite sure.
