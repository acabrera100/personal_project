const {db} = require("./index.js")


const getSinglePost = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db.one("SELECT * FROM posts WHERE id = $1", [userId])
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

const getAllPosts = (req,res,next) =>{
  db.any('SELECT * FROM posts')
  .then(data =>{
    res.status(200);
    res.json({
    status:"success",
    message:"Retrieved all posts",
    body:data
  })
})
.catch(err => next(err));
}

// Have not worked on the logic to determine post_type
//  if yada yada then its a text else if video yada yada

const createPost = (req, res, next) => {
  db.none('INSERT INTO posts(text_title,text_body,url) VALUES(${text_title},${text_body},${url})', req.body)
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

const updatePost = (req, res, next) => {
  db.none('UPDATE posts SET text_title=${text_title}, text_body=${text_body} WHERE id=${id}',{
    text_title: req.body.text_title,
    text_body:req.body.text_body,
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
// const getAllPostsByPost = (req,res,next) => {
//   let userId = parseInt(req.params.id);
//   db.one("SELECT text_title, text_body, handle,COUNT(user_id ) AS Likes FROM posts JOIN posts_tags ON post_id = posts.id JOIN tags ON tag_id = tags.id JOIN likes ON likes.post_id = posts.id WHERE posts_id = 1 GROUP BY text_title, text_body, handle", [userId])
//     .then(data => {
//       res.status(200);
//       res.json({
//         status: "success",
//         message: "This is all the posts by this user",
//         body: data
//       });
//     })
//     .catch(err => next(err));
// }

const deletePost = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db.result("DELETE FROM posts WHERE id=${id}", userId)
    .then(result => {
      res.status(200).json({
        status: "success",
        message: "You deleted the user",
        body: result
      });
    })
    .catch(err => next(err));
};


module.exports = {createPost,updatePost,getSinglePost,getAllPosts,deletePost}
