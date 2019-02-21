var express = require('express');
var router = express.Router();

const {createUser,updateUser,getSingleUser,getAllUsers,deleteUser,getAllPostsByUser} = require("../db/queries/UserQueries.js")

router.get("/",getAllUsers);
router.get("/:id", getSingleUser)
router.post("/",createUser)
router.put("/:id", updateUser)
router.delete("/:id",deleteUser)
// router.get("/:id/",getAllPostsByUser)

module.exports = router;
