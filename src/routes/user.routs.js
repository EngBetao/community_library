import { Router } from "express";fix: Corrige sintaxe de import em user.routs.js e adiciona rota POST
import userControllers from "../controller/user.controllers";

const router = Router();

router.post('/users', userControllers.createUserController
    
);

