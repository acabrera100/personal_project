var express = require('express');
var router = express.Router();

const {createPosts,updatePosts,getPostsByTag,getSinglePosts,getAllPostss,deletePosts} = require("../db/queries/PostsQueries.js")

router.get("/",getAllPostss);
router.get("/:id", getSinglePosts)
router.get("/:id",getPostsByTag)
router.post("/",createPosts)
router.put("/:id", updatePosts)
router.delete("/:id",deletePosts)
// router.get("/:id/posts",getAllPostsByPosts)
// ^ I have this get at line 11 because I think I will incoporate it here. Not quite sure.

module.exports = router;
