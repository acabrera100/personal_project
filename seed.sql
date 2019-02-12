DROP DATABASE IF EXISTS tumblrdatabase;
CREATE DATABASE tumblrdatabase;

\c tumblrdatabase;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS tags;
DROP TABLE IF EXISTS posts_tags;
DROP TABLE IF EXISTS followers;
DROP TABLE IF EXISTS likes;

CREATE TABLE users(
id SERIAL PRIMARY KEY,
username VARCHAR NOT NULL,
password VARCHAR NOT NULL,
email VARCHAR NOT NULL
);

CREATE TABLE posts(
  id SERIAL PRIMARY KEY,
  users_id INT REFERENCES users(id) ON DELETE CASCADE,
  text_title TEXT NOT NULL,
  text_body TEXT NOT NULL,
  url VARCHAR NOT NULL,
  post_type VARCHAR NOT NULL
);
-- post_type can be an 'image' 'video' or 'audio' or 'text' then in post queries you write the if statement to determine what kind of post it is.

CREATE TABLE tags(
  id SERIAL PRIMARY KEY,
  handle VARCHAR NOT NULL
);

CREATE TABLE posts_tags(
  post_id INT REFERENCES posts(id),
  tag_id INT REFERENCES tags(id)

);

CREATE TABLE followers(
  user_id INT REFERENCES users(id),
);
-- users(id) is following users(id) is all I want for the followers table to say.
CREATE TABLE likes(
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  post_id INT REFERENCES posts(id)

);
-- you can like an image, but wait an image is a post.
-- Whether the post contains text and an image or just an image it is all just a post

--                        NOTES
-- A FOREIGN KEY is a key used to link two tables together.

-- A FOREIGN KEY is a field (or collection of fields)
-- in one table that refers to the PRIMARY KEY in another table.


-- The id references post_tags_id becuase it was made in posts.
-- so it has a unique number but if you ever wanted to trace the source of
 -- the person who made tag handle you can.
 -- When you create a post you make an id for a tag at the tags table.
 --Posts have tags
 -- images have tags
 -- can a blog have a tag?
