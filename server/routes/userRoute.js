import { createUser,updateUser,getUser,getAllUsers,deleteUser } from '../controllers/userController.js';

    //Users
const userRoutes = (app) => {
    app.route('/user')
        .get(getAllUsers)
        .post(createUser);

    app.route('/user/:id')
         .put(updateUser)
         .get(getUser)
        .delete(deleteUser);
}


export default userRoutes;