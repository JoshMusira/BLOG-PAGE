import { createLike } from '../controllers/likeController.js'

const likeRoutes = (app) => {
    app.route('/like')
        .post(createLike);

}
export default likeRoutes