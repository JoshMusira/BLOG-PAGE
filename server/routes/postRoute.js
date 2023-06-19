import { createPost, getAllPost, updatePost, updatePost2, updatePost3, deletePost } from '../controllers/postController.js'
import { loginRequired } from '../controllers/auth.js'

const postRoutes = (app) => {
    app.route('/post')
        .get(loginRequired, getAllPost)
        .post(loginRequired, createPost);

    //Title
    app.route('/post/:id')
        .put(loginRequired, updatePost)
        .delete(loginRequired, deletePost)
    //Content
    app.route('/post2/:id')
        .put(loginRequired, updatePost2)
    //Category
    app.route('/post3/:id')
        .put(loginRequired, updatePost3)


}

export default postRoutes