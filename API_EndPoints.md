API EndPoints

HTML API

Root
GET/
Loads React web app

JSON API
Blog Methods
/info - Retrieve Blog Info (GET)
This method returns general information about the blog, such as the title, number of posts, and other high-level data.

/likes — Retrieve Blog's Likes (GET)
This method can be used to retrieve the publicly exposed likes from a blog.

/following — Retrieve Blog's following (GET)
This method can be used to retrieve the publicly exposed list of blogs that a blog follows, in order from most recently-followed to first.

/followers — Retrieve a Blog's Followers (GET)
		List of all the people the blog is following as a list.

/posts/submission — Retrieve Submission Posts (GET)
		Return a list of all the posts a user has posted

/posts - Create a Post (POST)
This  allows you to create posts and posted right away.

/posts/{post-id} - Editing a Post (Patch)
Allows you to edit posts

/post/delete – Delete a Post (Post)
Allows you to delete a single post

User Methods
/user/info – Get a User's Information (GET)

/user/dashboard – Retrieve a User's Dashboard (GET)

/user/likes — Retrieve a User's Likes (GET)
Retrieve the liked posts that is made with the request

/user/following – Retrieve the Blogs a User Is Following (GET)
Use this method to retrieve the blogs followed by the user whose OAuth credentials are submitted with the request.

/user/follow – Follow a blog (POST)
	This will follow a blog

/user/unfollow – Unfollow a blog (POST)
This will unfollow a blog

/user/like – Like a Post (POST)
This will a like an individual post

/user/unlike – Unlike a Post (POST)
This will unlike an individual post
Tagged Method
/tagged – Get Posts with Tag (GET)
