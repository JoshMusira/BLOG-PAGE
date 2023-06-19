import { createLike, getUsersWhoLikedPost } from '../controllers/likeController.js'
import { loginRequired } from '../controllers/auth.js'

const likeRoutes = (app) => {
    app.route('/like')
        .post(loginRequired, createLike);


    app.route('/like/:id')
        .get(loginRequired, getUsersWhoLikedPost)




}
export default likeRoutes