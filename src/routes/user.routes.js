import { Router } from "express";
import userController from "../controller/user.controllers.js";

const userRouter = Router();

userRouter.post("/", userController.createUser);
userRouter.get("/", userController.findAllUsers);
userRouter.delete("/:id", userController.deleteUser);

// --- A NOVIDADE ESTÁ AQUI ---
userRouter.put("/:id", userController.updateUser);

export default userRouter;