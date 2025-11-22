import db from "../config/database.js";

db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    avatar TEXT
  )
`, (err) => {
  if (err) console.error("Erro na criação da tabela:", err.message);
  else console.log("Tabela 'users' verificada/criada com sucesso.");
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

function findAllUsersRepository() {
  return new Promise((resolve, reject) => {
    db.all(`SELECT id, username, email, avatar FROM users`, [], (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
}

function deleteUserRepository(id) {
  return new Promise((resolve, reject) => {
    db.run(`DELETE FROM users WHERE id = ?`, [id], (err) => {
      if (err) return reject(err);
      resolve({ message: "Usuário deletado com sucesso" });
    });
  });
}

// --- A NOVIDADE ESTÁ AQUI ---
function updateUserRepository(id, userUpdated) {
  return new Promise((resolve, reject) => {
    const { username, email, password, avatar } = userUpdated;
    db.run(
      `UPDATE users SET username = ?, email = ?, password = ?, avatar = ? WHERE id = ?`,
      [username, email, password, avatar, id],
      (err) => {
        if (err) return reject(err);
        resolve({ id, ...userUpdated });
      }
    );
  });
}

export default {
  createUserRepository,
  findAllUsersRepository,
  deleteUserRepository,
  updateUserRepository, // <--- Não esqueça que exportamos ela aqui
};