import userService from '../service/user.services.js';

async function createUserController(req, res) {
    try {
        const newUser = req.body;
        const user = await userService.createdUserService(newUser);
        return res.status(201).send({ user });
    } catch (error) {
        return res.status(400).send({ error: error.message });
    }
}

export default {
    createUserController,
};