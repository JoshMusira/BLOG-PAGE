import React from 'react'
import '../blog/blog.css'
import { useEffect, useContext, useState } from 'react'
import { Context } from '../../context/userContext/Context'
import Axios from 'axios'
import { apiDomain } from '../../utils/utilsDomain'
import post1 from '../../assets/images/9.jpeg'
import { set } from 'react-hook-form'
import { RiDeleteBin6Line } from 'react-icons/ri'
import TimeDifference from '../../utils/TimeStamp'
// import TimeDifference from '../../utils/TimeStamp'

const Blog = () => {
    const { user } = useContext(Context)
    const [blogs, setBlogs] = useState([])

    const getBlogs = async () => {
        const res = await Axios.get(`${apiDomain}/post`, {
            headers: { "Authorization": `${user.token}` }
        })
        setBlogs(res.data)
    }
    // console.log(blogs.post_id)

    useEffect(() => {
        getBlogs()

    }, []);

    const handleDelete = async (index) => {
        const postToDelete = blogs[index];
        console.log(postToDelete.post_id);

        // Perform the deletion logic here using the post_id

        // Example:
        try {
            await Axios.delete(`${apiDomain}/post/${postToDelete.post_id}`, {
                headers: { "Authorization": `${user.token}` }

            });
            alert("Post deleted successful");
            // Update the blogs state after successful deletion
            const updatedBlogs = [...blogs];
            updatedBlogs.splice(index, 1);
            setBlogs(updatedBlogs);
        } catch (error) {
            alert('Your not the Owner.')
            // console.log(error);
        }
    };


    return (

        <>
            {
                blogs && blogs.map((post, index) => {
                    return (
                        <div className='post'>
                            {/* <h3>{post.image_URL}</h3> */}
                            <img className='postImg' src={post1} alt="" />
                            <div className="postInfo">
                                <div className="postCats">
                                    <span className="postCat">{post.category_name}</span>
                                </div>
                                <span className="postTitle">
                                    {post.title}

                                </span>
                                <hr />
                                <span className="postDate">{<TimeDifference />}</span>

                            </div>
                            <p className="postDesc">{post.Content}</p>
                            <div className="likeContainer">
                                <span className="img">❤</span>
                                <span className="numberOfLikes">6 likes</span>
                                <span className="viewLikes">View all Likes</span>
                            </div>
                            <div className="commentContainer">
                                <span className="viewComments">View all comments</span>
                                <div className="addComment">
                                    <textarea type='text' name="" placeholder='Add a comment' id="" className="comment"></textarea>
                                    <input type="submit" className='submit' value="Post" /><span className='emoji'>😂</span>
                                </div>
                            </div>
                            <span><RiDeleteBin6Line className='delete' onClick={() => handleDelete(index)} /></span>


                        </div>
                    )
                })
            }


        </>
    )
}

export default Blog