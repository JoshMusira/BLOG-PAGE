import { createComment, deleteComment, getAllComments, getCommentsByPostId } from '../controllers/commentController.js'
import { loginRequired } from '../controllers/auth.js'
const commentRoutes = (app) => {
    app.route('/comment')
        .get(getAllComments)
        .post(createComment);

    app.route('/comment/:post_id')
        .delete(deleteComment)
        .get(getCommentsByPostId)
}
export default commentRoutes

//