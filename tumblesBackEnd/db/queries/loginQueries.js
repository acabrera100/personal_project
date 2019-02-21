const {db} = require("./index.js");

const authHelpers = require("../../auth/helpers.js");

function createUser(req, res, next) {
  const hash = authHelpers.createHash(req.body.password);

  db.none(
    "INSERT INTO users (username, password_digest,email) VALUES (${username}, ${password_digest},${email})",
    { username: req.body.username, password_digest: hash , email:req.body.email}
  )
    .then(() => {
      res.status(200).json({
        message: "Registration successful."
      });
    })
    .catch(err => {
      res.status(500).json({
        message: err
      });
    });
}

function logoutUser(req, res, next) {
  req.logout();
  res.status(200).send("log out success");
}

function loginUser(req, res) {
  res.json(req.user);
  res.status(200).send("log in  success");
}

function isLoggedIn(req, res) {
  if (req.user) {
    res.json({ username: req.user });
  } else {
    res.json({ username: null });
  }
}

module.exports = {
  createUser: createUser,
  logoutUser: logoutUser,
  loginUser: loginUser,
  isLoggedIn: isLoggedIn
};
