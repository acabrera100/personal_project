// helpers.js is where we use bcrypt to create and verify users. We also create a piece of middleware here, loginRequired, that makes sure a session token is on our request header. We'll use this in routes that we want a user to be logged in to access.
const pgp = require("pg-promise")({});
const connectionString = "postgres:/localhost/tumblrdatabase";
// Line 3 not sure where it connects me just yet. ITS THE DATABASE NAME
const db = pgp(connectionString);
const bcrypt = require("bcryptjs");

function comparePass(userPassword, databasePassword) {
  return bcrypt.compareSync(userPassword, databasePassword);
}

function createHash(password) {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(password, salt);
  return hash;
}
function loginRequired(req, res, next) {
  if (!req.user) {
    res.status(401)
    .json({status:"Forbidden- please log in."})
    return;
  }
  next();
}

module.exports ={
  comparePass,
  createHash,
  loginRequired
}
