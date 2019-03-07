const { db } = require("./index.js");

const getSinglePost = (req, res, next) => {
  let postId = parseInt(req.params.id);
  db.one("SELECT * FROM posts WHERE id = $1", [postId])
    .then(data => {
      res.status(200);
      res.json({
        status: "success",
        message: "Retrieved a single post",
        body: data
      });
    })
    .catch(err => {
      console.log(err);
      return next(err);
    });
};

const getAllPosts = (req, res, next) => {
  db.any("SELECT * FROM posts")
    .then(data => {
      res.json({
        status: "success",
        message: "Retrieved all posts",
        body: data
      });
    })
    .catch(err => {
      console.log(err);
      return next(err);
    });
};

const getPostsByTag = (req, res, next) => {
  let tagId = req.params.id;
  console.log(typeof tagId);
  db.any(
    "SELECT text_title,text_body,handle,COUNT(user_id) AS Likes FROM posts JOIN posts_tags ON post_id = posts.id JOIN tags ON tag_id = tags.id JOIN likes ON likes.post_id = posts.id WHERE tags.handle = $1 GROUP BY text_title, text_body, handle",
    tagId
  )
    .then(data => {
      res.status(200).json({
        status: "Success",
        message: "These are the posts associated with this tag",
        body: data
      });
    })
    .catch(err => {
      console.log(err);
      return next(err);
    });
};

const createPosts = (req, res, next) => {
  db.none(
    "INSERT INTO posts(text_title,text_body,url,post_type) VALUES(${text_title},${text_body},${url},${post_type})",
    req.body
  )
    .then(() => {
      res.status(200).json({
        status: "success",
        message: "You added a post to your blog!"
      });
    })
    .catch(err => {
      console.log(err);
      return next(err);
    });
};
//
// const updatePost = (req, res, next) => {
//   db.none('UPDATE posts SET text_title=${text_title}, text_body=${text_body} WHERE id=${id}',{
//     text_title: req.body.text_title,
//     text_body:req.body.text_body,
//     id: parseInt(req.params.id)
//   })
//   .then(() => {
//     res.status(200)
//       .json({
//         status: 'success',
//         message: 'Updated the post!'
//       })
//   })
//   .catch(err => {
//     console.log(err)
//     return next(err)})
// }


const deletePost = (req, res, next) => {
  let postId = parseInt(req.params.id);
  db.result("DELETE FROM posts WHERE id=$1", postId)
    .then(result => {
      res.status(200).json({
        status: "success",
        message: "You deleted the post",
        body: result
      });
    })
    .catch(err => {
        console.log(err)
        return next(err)})
};

module.exports = { getAllPosts, getSinglePost, getPostsByTag, createPosts,deletePost };
