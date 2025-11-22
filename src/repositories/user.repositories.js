import db from "../config/database.js";

// Criação da tabela (Mantemos igual)
db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    avatar TEXT
  )
`, (err) => {
  if (err) {
    console.error("Erro na criação da tabela users:", err.message);
  } else {
    console.log("Tabela 'users' verificada/criada com sucesso.");
  }
});

function createUserRepository(newUser) {
  return new Promise((resolve, reject) => {
    const { username, email, password, avatar } = newUser;
    db.run(
      `INSERT INTO users (username, email, password, avatar) VALUES (?, ?, ?, ?)`,
      [username, email, password, avatar],
      function (err) {
        if (err) return reject(err);
        resolve({ id: this.lastID, ...newUser });
      }
    );
  });
}

// NOVA FUNÇÃO: Buscar todos os usuários
function findAllUsersRepository() {
  return new Promise((resolve, reject) => {
    db.all(`SELECT id, username, email, avatar FROM users`, [], (err, rows) => {
      if (err) return reject(err);
      resolve(rows); // Devolve todas as linhas encontradas
    });
  });
}

export default {
  createUserRepository,
  findAllUsersRepository, // Exportamos a função nova
};