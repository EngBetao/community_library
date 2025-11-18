import userRepositries from "../repositories/user.repositries.js";

async function createdUserService(newUser) {
    const user = await userRepositries.createUserRepository(newUser);
    return user;
}

export default {
    createdUserService
}