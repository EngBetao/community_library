import userRepositries from "../repositories/user.repositries";

async function createdUserService(newUser) {
    const user = await userRepositries.createUserRepository(newUser);
    return user;
}