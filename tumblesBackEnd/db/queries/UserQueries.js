const {db} = require("./index.js")


const getSingleUser = (req, res, next) => {
  // the word entered in the wildcard for id. that way when choosing from one of the database
  // we return a single user. So in this case if you go to your profile account page
  // you can see your username and password. The idea is that you are logged in and can only access it as a protected route
  // and the front end request will automatically match your userid
  let userId = parseInt(req.params.id);
  db.one("SELECT * FROM users WHERE id = $1", [userId])
    .then(data => {
      res.status(200);
      res.json({
        status: "success",
        message: "The profile information about this user",
        body: data
      });
    })
    .catch(err => next(err));
};

const getAllUsers = (req,res,next) =>{
  db.any('SELECT * FROM users')
  .then(data =>{
    res.status(200);
    res.json({
    status:"success",
    message:"Retrieved all users",
    body:data
  })
})
.catch(err => next(err));
}

const createUser = (req, res, next) => {
  db.none('INSERT INTO users(username,password,email) VALUES(${username},${password},${email})', req.body)
    .then(() => {
      res.status(200)
        .json({
          status: 'success',
          message: 'You have created a new Tumbles account'
        })
    })
    .catch(err => {
      console.log(err)
      return next(err)})
}

const updateUser = (req, res, next) => {
  db.none('UPDATE users SET username=${username}, password=${password} WHERE id=${id}',{
    username: req.body.username,
    password:req.body.password,
    id: parseInt(req.params.id)
  })
  .then(() => {
    res.status(200)
      .json({
        status: 'success',
        message: 'Updated this user account!'
      })
  })
  .catch(err => {
    console.log(err)
    return next(err)})
}
// When I am at the dashboard I want to see all the posts by me. or when I am at someone else's page I want to see all of their posts
// I want to see the text_title, text_body, tags associated with this post
const getAllPostsByUser = (req,res,next) => {
  let userId = parseInt(req.params.id);
  db.one("SELECT text_title, text_body, handle,COUNT(user_id ) AS Likes FROM posts JOIN posts_tags ON post_id = posts.id JOIN tags ON tag_id = tags.id JOIN likes ON likes.post_id = posts.id WHERE users_id = 1 GROUP BY text_title, text_body, handle", [userId])
    .then(data => {
      res.status(200);
      res.json({
        status: "success",
        message: "This is all the posts by this user",
        body: data
      });
    })
    .catch(err => next(err));
}
// the query works on psequel Idk why it doesnt work
// relation "posts" does not exist
// error: relation "posts" does not exist
const deleteUser = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db.result("DELETE FROM users WHERE id=${id}", userId)
    .then(result => {
      res.status(200).json({
        status: "success",
        message: "You deleted the user",
        body: result
      });
    })
    .catch(err => next(err));
};


module.exports = {createUser,updateUser,getSingleUser,getAllUsers,deleteUser,getAllPostsByUser}
