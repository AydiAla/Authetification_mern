import { Router } from "express";
import Paths from "../constants/Paths";
import {
    createUser,
    deleteUser,
    getAllUsers,
    getUserById,
    login,
    updateUser,
} from "../controllers/user.controller";
const userRouter = Router();
userRouter.route(Paths.Users.base).get(getAllUsers).post(createUser);
userRouter
    .route(Paths.Users.one)
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);
userRouter.route(Paths.Users.login).post(login)


export default userRouter;



