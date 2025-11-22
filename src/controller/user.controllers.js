import userRepository from "../repositories/user.repositories.js";

async function createUser(req, res) {
  try {
    const newUser = req.body;
    const userCreated = await userRepository.createUserRepository(newUser);
    return res.status(201).json({ message: "Criado!", user: userCreated });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
}

async function findAllUsers(req, res) {
  try {
    const users = await userRepository.findAllUsersRepository();
    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
}

async function deleteUser(req, res) {
  try {
    const id = req.params.id;
    await userRepository.deleteUserRepository(id);
    return res.status(200).json({ message: "Usuário deletado com sucesso!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
}

// --- A NOVIDADE ESTÁ AQUI ---
async function updateUser(req, res) {
  try {
    const id = req.params.id;
    const userUpdated = req.body;
    const user = await userRepository.updateUserRepository(id, userUpdated);
    return res.status(200).json({ message: "Usuário atualizado com sucesso!", user: user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
}

export default {
  createUser,
  findAllUsers,
  deleteUser,
  updateUser, // <--- Exportando
};