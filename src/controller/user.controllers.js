import userRepository from "../repositories/user.repositories.js";

async function createUser(req, res) {
  try {
    // 1. Pega os dados que o usuário enviou
    const newUser = req.body;

    // 2. Chama a "cozinha" (Repositório) para salvar
    const userCreated = await userRepository.createUserRepository(newUser);

    // 3. Devolve a resposta de sucesso
    return res.status(201).json({
      message: "Usuário criado com sucesso!",
      user: userCreated
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
}

export default {
  createUser,
};