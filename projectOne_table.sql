-- Create Users table
CREATE TABLE Users (
  user_id INT IDENTITY(1,1) PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  password VARCHAR(100) NOT NULL,
  image_URL VARCHAR(100) ,
  created_at VARCHAR NOT NULL
);

-- Create Posts table
CREATE TABLE Posts (
  post_id INT IDENTITY(1,1) PRIMARY KEY,
  title VARCHAR(50) NOT NULL,
  Content VARCHAR(MAX) NOT NULL,
  image_URL VARCHAR(100) ,
  user_id INT NOT NULL,
  category_name VARCHAR(50) NOT NULL,
  created_at DATETIME NOT NULL,
  FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Create Comments table
CREATE TABLE Comments (
  comment_id INT IDENTITY(1,1) PRIMARY KEY,
  post_id INT NOT NULL,
  user_id INT NOT NULL,
  content VARCHAR(100) NOT NULL,
  created_at DATETIME NOT NULL,
  FOREIGN KEY (post_id) REFERENCES Posts(post_id) ON DELETE NO ACTION ON UPDATE NO ACTION,
  FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- Create Likes table
CREATE TABLE Likes (
  like_id INT IDENTITY(1,1) PRIMARY KEY,
  post_id INT NOT NULL,
  user_id INT NOT NULL,
  created_at DATETIME NOT NULL,
  FOREIGN KEY (post_id) REFERENCES Posts(post_id) ON DELETE NO ACTION ON UPDATE NO ACTION,
  FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE NO ACTION ON UPDATE NO ACTION
);
