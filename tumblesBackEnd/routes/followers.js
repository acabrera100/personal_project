var express = require("express");
var router = express.Router();

const {
  getAllFollowings,
  getAFollower,
  createFollowing,
  deleteFollowing,
  getFollowers
} = require("../db/queries/FollowersQueries.js");

router.get("/", getAllFollowings);
router.get("/:id", getAFollower);
router.get("/followers",getFollowers)
// router.post("/", createFollowing);
router.delete("/:id", deleteFollowing);


module.exports = router;
