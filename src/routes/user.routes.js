import { Router } from "express";
// Importamos o Controller que acabamos de criar
import userController from "../controller/user.controllers.js";

const userRouter = Router();

// Quando alguém enviar um POST na raiz (/), chamamos o controller
userRouter.post("/", userController.createUser);

export default userRouter;