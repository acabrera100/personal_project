var express = require('express');
var router = express.Router();

const {createPosts,updatePosts,getSinglePosts,getAllPostss,deletePosts} = require("../db/queries/PostsQueries.js")

router.get("/",getAllPostss);
router.get("/:id", getSinglePosts)
router.post("/",createPosts)
router.put("/:id", updatePosts)
router.delete("/:id",deletePosts)
// router.get("/:id/posts",getAllPostsByPosts)

module.exports = router;
