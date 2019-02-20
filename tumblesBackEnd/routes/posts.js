var express = require('express');
var router = express.Router();

const {getSinglePost,getAllPosts,deletePost} = require("../db/queries/PostsQueries.js")

router.get("/",getAllPosts);
router.get("/:id", getSinglePost)
// router.post("/",createPosts)
// router.put("/:id", updatePosts)
router.delete("/:id",deletePost)
module.exports = router;

// createPosts,updatePosts,

// router.get("/:id",getPostsByTag)

// router.get("/:id/posts",getAllPostsByPosts)
// ^ I have this get at line 11 because I think I will incoporate it here. Not quite sure.
