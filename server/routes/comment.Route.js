import { createComment, deleteComment, getAllComments } from '../controllers/commentController.js'
import { loginRequired } from '../controllers/auth.js'
const commentRoutes = (app) => {
    app.route('/comment')
        .get(loginRequired, getAllComments)
        .post(createComment);

    app.route('/comment/:id')
        .delete(deleteComment)
}
export default commentRoutes

//