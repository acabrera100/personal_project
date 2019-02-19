DROP DATABASE IF EXISTS tumblrdatabase;
CREATE DATABASE tumblrdatabase;

\c tumblrdatabase;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS tags;
DROP TABLE IF EXISTS posts_tags;
DROP TABLE IF EXISTS followers;
DROP TABLE IF EXISTS likes;
DROP TABLE users CASCADE;
DROP TABLE posts CASCADE;

CREATE TABLE users(
id SERIAL PRIMARY KEY,
username VARCHAR NOT NULL,
password VARCHAR NOT NULL,
email VARCHAR NOT NULL
);

CREATE TABLE posts(
  id SERIAL PRIMARY KEY,
  users_id INT REFERENCES users(id) ON DELETE CASCADE,
  text_title TEXT NOT NULL ,
  text_body TEXT NOT NULL ,
  url VARCHAR ,
  post_type VARCHAR NOT NULL
);
-- post_type can be an 'image' 'video' or 'audio' or 'text' then in post queries you write the if statement to determine what kind of post it is.
CREATE TABLE tags(
  id SERIAL PRIMARY KEY,
  handle VARCHAR NOT NULL
);
CREATE TABLE posts_tags(
  id SERIAL PRIMARY KEY,
  post_id INT REFERENCES posts(id) ON DELETE CASCADE  ,
  tag_id INT REFERENCES tags(id)

);
CREATE TABLE following(
id SERIAL PRIMARY KEY,
follower_id INTEGER REFERENCES Users(id)  ON DELETE CASCADE ,
following_id INTEGER REFERENCES Users(id) ON DELETE CASCADE
);
CREATE TABLE likes(
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id)  ON DELETE CASCADE,
  post_id INT REFERENCES posts(id) ON DELETE CASCADE

);

INSERT INTO users(username, password ,email) VALUES ('Wakanda','panther', 'bpanther@king.com'), ('Spooderman','parker', 'spidey69@hotmail.com'), ('GoRigoGo','jagger', 'RigobertoUran1@gmail.com'),  ('Solidus','lalelulilo', 'hideoKojimbo@otaku.com'), ('GPW','corndilly', 'marblesmarbles@snes.com');
INSERT INTO posts(users_id, text_title, text_body, url, post_type) VALUES ( 1, 'post 1', 'Wakanda here just saying hello to my Tumbles peoples','','text'), ( 1, 'post 2', 'Did I get the Thanos Snap?','','text'), ( 2, 'post 1', 'Spooderman points finger at himself','','text'), (3, 'post uno', 'Parce me voy a ganar este Tour de Colombia','','text'), (4, 'Dead Cells', 'LIKWIT ','','text'),  (5, 'Barb da King', 'Mario Maker 2 looking good ','','text');
INSERT INTO tags(handle) VALUES ('marvel'), ('metalgear'), ('hashtag'), ('testerguy'), ('personal_project');
INSERT INTO following(follower_id, following_id) VALUES (1,2), (1,3), (1,4), (2,5), (5,1), (5,2), (5,3), (5,4), (3,4), (3,1);
INSERT INTO posts_tags(post_id, tag_id) VALUES (1,1), (1,3), (5,2), (2,1);
INSERT INTO likes(user_id, post_id) VALUES (5,1), (5,2), (5,3), (5,4), (2,1), (3,1), (4,2);
