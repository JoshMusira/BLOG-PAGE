import { createUser } from '../controllers/userController.js';



const userRoutes = (app) => {
    app.route('/user')
        // .get(getTodos)
        .post(createUser);

    // app.route('/todo/:id')
    //     .put(updateTodo)
    //     .get(getTodo)
    //     .delete(deleteTodo);
}


export default userRoutes;