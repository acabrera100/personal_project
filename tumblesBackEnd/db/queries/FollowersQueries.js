const {db} = require("./index.js");

const getAllFollowings = (req, res, next) => {
  db.any('SELECT * FROM following',)
    .then(data => {
      res.status(200).json({
        status: "Success",
        message: "Got all Followings",
        body: data
      });
    })
    .catch(err => {
      console.log(err);
      return next(err);
    });
};

const getAFollower = (req, res, next) => {
  let followId = req.params.id;
  db.one("SELECT * FROM following WHERE id=$1", followId)
    .then(data => {
      res.status(200).json({
        status: "Success",
        message: "Retrieved a follower info",
        body: data
      });
    })
    .catch(err => {
      console.log(err);
      return next(err);
    });
};

const getFollowers = (req, res, next) => {
  let userId = req.params.id;
  db.any("SELECT * FROM following WHERE follower_id=$1", userId)
    .then(data => {
      res.status(200).json({
        status: "Success",
        message: "Got all follows by User id: " + userId,
        body: data
      });
    })
    .catch(err => {
      console.log(err);
      return next(err);
    });
};

// const createAFollowing = (req, res, next) => {
//   db.none(
//     "INSERT INTO following( user_id, follower_id) VALUES(${user_id},${follower_id})",
//     req.body
//   )
//     .then(() => {
//       res.status(200).json({
//         status: "Success",
//         message: "You are following someone now!"
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       return next(err);
//     });
// };

const deleteFollowing = (req, res, next) => {
  let followingId = parseInt(req.params.id);
  db.result("DELETE FROM following WHERE id=$1", followingId)
    .then(result => {
      res.status(200).json({
        status: "success",
        message: "No Longer following this user"
      });
    })
    .catch(err => {
      console.log(err);
      return next(err);
    });
};



module.exports = {
  getAllFollowings,
  getAFollower,
  deleteFollowing,
  getFollowers
};
