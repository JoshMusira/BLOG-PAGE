import React from "react";
import "../blog/blog.css";
import { useEffect, useContext, useState } from "react";
import { Context } from "../../context/userContext/Context";
import Axios from "axios";
import { apiDomain } from "../../utils/utilsDomain";
import post1 from "../../assets/images/9.jpeg";
import { set } from "react-hook-form";
import { RiDeleteBin6Line } from "react-icons/ri";
import TimeDifference from "../../utils/TimeStamp";
import heart from "../../assets/images/heart.png";
import Comments from "../comment/Comments";
import AddComment from "../comment/AddComment";

const Blog = ({ post, onDelete }) => {
    const { user } = useContext(Context);
    const [showComments, setShowComments] = useState(false);

    const [likeTotal, setLike] = useState(2);
    const [isLiked, setIsLiked] = useState(false);

    const handleCommentClick = () => {
        setShowComments((prevState) => !prevState);
    };

    const likeHandler = () => {
        setLike(isLiked ? likeTotal - 1 : likeTotal + 1);
        setIsLiked(!isLiked);
    };

    const handleDelete = () => {
        onDelete(post.post_id);
    };

    return (
        <>
            <div className="post">
                {/* <h3>{post.image_URL}</h3> */}
                <img className="postImg" src={post1} alt="" />
                <div className="postInfo">
                    <div className="postCats">
                        <span className="postCat">{post.post_id}</span>
                    </div>
                    <span className="postTitle">{post.title}</span>
                    <hr />
                    <span className="postDate">{<TimeDifference />}</span>
                </div>
                <p className="postDesc">{post.Content}</p>
                <div className="likeContainer">
                    <span className="img">❤</span>
                    <span className="numberOfLikes">6 likes</span>
                    <span className="viewLikes">View all Likes</span>
                </div>
                {/* <Comments id={id} /> */}
                <div className="commentContainer">
                    <span
                        className="viewComments"
                        onClick={handleCommentClick}
                    >
                        View all comments
                    </span>
                    {showComments && <Comments id={post.post_id} />}

                    <AddComment id={post.post_id} />

                </div>
                <span>
                    <RiDeleteBin6Line
                        className="delete"
                        onClick={handleDelete}
                    />
                </span>
                <div className="postBottomLeft">
                    {/* <img className='likeIcon' src={likeImg} onClick={likeHandler} alt="" /> */}
                    <img className="likeIcon" src={heart} onClick={likeHandler} alt="" />
                    <span className="postLikeCounter"> people like it</span>
                </div>
            </div>
        </>
    );
};

export default Blog;
