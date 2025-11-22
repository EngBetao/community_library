import { Router } from "express";
import userController from "../controller/user.controllers.js";

const userRouter = Router();

userRouter.post("/", userController.createUser);
userRouter.get("/", userController.findAllUsers);
userRouter.delete("/:id", userController.deleteUser);

// NOVA ROTA PUT
// Ex: PUT /users/1 (manda os dados novos no corpo)
userRouter.put("/:id", userController.updateUser);

export default userRouter;