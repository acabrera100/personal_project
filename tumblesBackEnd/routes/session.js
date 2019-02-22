var express = require('express');
var router = express.Router();
const db = require('../db/queries/loginQueries.js');
const {loginRequired} = require('../auth/helpers');
const passport = require("../auth/local");

router.post('/new',db.createUser);
router.post("/login", passport.authenticate("local", {}), db.loginUser);
router.post('/logout',loginRequired,db.logoutUser);
router.get("/isLoggedIn", db.isLoggedIn);
const {
      createUser,
      loginUser,
      isLoggedIn,
      logoutUser
    } = require("../db/queries/loginQueries.js");



module.exports = router;
