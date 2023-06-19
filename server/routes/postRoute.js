import { createPost, getAllPost, updatePost, updatePost2, updatePost3, deletePost } from '../controllers/postController.js'

const postRoutes = (app) => {
    app.route('/post')
        .get(getAllPost)
        .post(createPost);

    //Title
    app.route('/post/:id')
        .put(updatePost)
        .delete(deletePost)
    //Content
    app.route('/post2/:id')
        .put(updatePost2)
    //Category
    app.route('/post3/:id')
        .put(updatePost3)

}

export default postRoutes