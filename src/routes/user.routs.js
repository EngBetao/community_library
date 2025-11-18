import { Router } from "express";fix: 

import userControllers from "../controller/user.controllers";

const router = Router();

router.post('/users', userControllers.createUserController
    
);

