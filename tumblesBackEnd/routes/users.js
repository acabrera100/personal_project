var express = require('express');
var router = express.Router();
const db = require('../db/queries');
const {loginRequired} = require('../auth/helpers');

// const {createUser,updateUser,getSingleUser,getAllUsers,deleteUser,getAllPostsByUser} = require("../db/queries/UserQueries.js")


// Login setup
router.post('/new',db.createUser);
router.post('/login',passport.authenticate("local",{}),db.loginUser);
router.post('/logout',loginRequired,db.logoutUser);


// router.get("/",getAllUsers);
// router.get("/:id", getSingleUser)
// router.post("/",createUser)
// router.put("/:id", updateUser)
// router.delete("/:id",deleteUser)
// router.get("/:id/",getAllPostsByUser)

// 45 minutes in the video at this point.

module.exports = router;
