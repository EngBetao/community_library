import userRepository from "../repositories/user.repositories.js";

// Função de Criar (Mantemos igual)
async function createUser(req, res) {
  try {
    const newUser = req.body;
    const userCreated = await userRepository.createUserRepository(newUser);
    return res.status(201).json({
      message: "Usuário criado com sucesso!",
      user: userCreated
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
}

// NOVA FUNÇÃO: Listar Usuários
async function findAllUsers(req, res) {
  try {
    const users = await userRepository.findAllUsersRepository();
    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
}

export default {
  createUser,
  findAllUsers, // Exportamos a nova função
};