import express from 'express';
// A CORREÇÃO ESTÁ AQUI: Note o ".js" no final e a escrita "routs" igual ao seu arquivo
import router from "./src/routes/user.routs.js"; 

const app = express();

app.use(express.json());

app.use(router);

const PORT = 3000; // Ou a porta que preferir
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});