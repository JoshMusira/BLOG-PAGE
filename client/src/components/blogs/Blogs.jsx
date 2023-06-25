import Blog from "../blog/Blog";
import Axios from "axios";
import { Context } from "../../context/userContext/Context";
import { useEffect, useContext, useState } from "react";
import { apiDomain } from "../../utils/utilsDomain";

const Blogs = () => {
    const { user } = useContext(Context);
    const [blogs, setBlogs] = useState([])

    const getBlogs = async () => {
        const res = await Axios.get(`${apiDomain}/post`, {
            headers: { "Authorization": `${user.token}` }
        })
        setBlogs(res.data)
    }

    const handleDelete = async (postId) => {
        try {
            await Axios.delete(`${apiDomain}/post/${postId}`);
            alert("Post deleted successfully");
            // Update the blogs state after successful deletion
            setBlogs(prevBlogs => prevBlogs.filter(blog => blog.post_id !== postId));
        } catch (error) {
            alert("You are not the owner.");
            // console.log(error);
        }
    };

    useEffect(() => {
        getBlogs();
    }, []);

    return (
        <>
            {
                blogs && blogs.map((post, index) => (
                    <Blog key={post.post_id} post={post} onDelete={handleDelete} />
                ))
            }
        </>
    )
}

export default Blogs;
