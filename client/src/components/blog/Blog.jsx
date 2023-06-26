import React from "react";
import { Link } from "react-router-dom";
import "../blog/blog.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useContext, useState } from "react";
import { Context } from "../../context/userContext/Context";
import Axios from "axios";
import { apiDomain } from "../../utils/utilsDomain";
import post1 from "../../assets/images/9.jpeg";
import Comments from "../comment/Comments";
import AddComment from "../comment/AddComment";
import likegif from '../../assets/images/likegif.gif';
import { GrUpdate } from 'react-icons/gr'

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

    // const handleDelete = async () => {
    //     try {
    //         await Axios.delete(`${apiDomain}/post/${post.post_id}`, {
    //             headers: { Authorization: `${user.token}` },
    //         });
    //         onDelete(post.post_id); // Invoke the onDelete function passed from the parent component
    //     } catch (error) {
    //         console.error(error);
    //         // Handle error while deleting the post
    //     }
    // };

    return (
        <>{

            <Link className="Link" to={`/post/${post.post_id}`}>
                <div className="post">
                    <img className="postImg" src={post1} alt="" />
                    <div className="postInfo">
                        <div className="postCats">
                            <span className="postCat">{post.categoryname}</span>
                        </div>
                        <span className="postTitle">{post.title}</span>
                        <hr />
                        <span className="postDate">Date:{post.created_at}</span>
                    </div>
                    <p className="postDesc">{post.Content}</p>
                    <div className="likeContainer">
                        <img
                            className="likeIcon"
                            src={likegif}
                            onClick={likeHandler}
                            alt=""
                        />
                        <span className="numberOfLikes">6 likes</span>
                        <span className="viewLikes">View all Likes</span>
                    </div>
                    <div className="commentContainer">
                        <span className="viewComments" onClick={handleCommentClick}>
                            View all comments
                        </span>
                        {showComments && <Comments id={post.post_id} />}
                        <AddComment id={post.post_id} />
                    </div>
                    <span className="delete">
                        <RiDeleteBin6Line />
                    </span>
                </div>
            </Link>
        }
        </>

    );
};

export default Blog;
