import { Router } from "express";
import userController from "../controller/user.controllers.js";

const userRouter = Router();

userRouter.post("/", userController.createUser);
userRouter.get("/", userController.findAllUsers);

// NOVA ROTA DELETE
// O ":id" indica que o que vier depois da barra é uma variável
// Ex: /users/1, /users/50
userRouter.delete("/:id", userController.deleteUser);

export default userRouter;