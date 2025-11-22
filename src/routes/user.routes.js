import { Router } from "express";
import userController from "../controller/user.controllers.js";

const userRouter = Router();

// Rota POST para CRIAR (Já existia)
userRouter.post("/", userController.createUser);

// NOVA Rota GET para LISTAR
// Quando alguém acessar /users sem mandar dados, mostramos a lista
userRouter.get("/", userController.findAllUsers);

export default userRouter;