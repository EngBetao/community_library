import userService from '../services/user.service.js';

async function createUserController(req, res) {
    try {
        const user = userService.createdUserService(newUser);
        res.status(201).send({user});
    } catch (error) {
        return res.status(400).send({error: error.message});
    }    
}

export default {
    createUserController
}