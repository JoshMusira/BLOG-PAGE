import { createComment, deleteComment, getAllComments } from '../controllers/commentController.js'

const commentRoutes = (app) => {
    app.route('/comment')
        .get(getAllComments)
        .post(createComment);

    app.route('/comment/:id')
        .delete(deleteComment)
}
export default commentRoutes

//