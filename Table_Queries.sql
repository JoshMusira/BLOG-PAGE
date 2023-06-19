-- Create Users table
CREATE TABLE Users (
  user_id INT IDENTITY(1,1) PRIMARY KEY,
  username VARCHAR(50),
  email VARCHAR(50),
  password VARCHAR(100),
  image_URL VARCHAR(100),
  created_at DATETIME
);


-- Create Posts table
CREATE TABLE Posts (
  post_id INT IDENTITY(1,1) PRIMARY KEY,
  title VARCHAR(50),
  Content VARCHAR(MAX),
  image_URL VARCHAR(100),
  user_id INT,
  category_name VARCHAR(50),
  created_at DATETIME,
  FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE ON UPDATE CASCADE
);
-- Create Comments table
CREATE TABLE Comments (
  comment_id INT IDENTITY(1,1) PRIMARY KEY,
  post_id INT,
  user_id INT,
  content VARCHAR(100),
  created_at DATETIME,
  FOREIGN KEY (post_id) REFERENCES Posts(post_id) ON DELETE  NO ACTION ON UPDATE  NO ACTION,
  FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE  NO ACTION ON UPDATE NO ACTION
);
-- Create Likes table
CREATE TABLE Likes (
  like_id INT IDENTITY(1,1) PRIMARY KEY,
  post_id INT,
  user_id INT,
  created_at DATETIME,
  FOREIGN KEY (post_id) REFERENCES Posts(post_id) ON DELETE  NO ACTION ON UPDATE  NO ACTION,
  FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE  NO ACTION ON UPDATE  NO ACTION
);
