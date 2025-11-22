import express from 'express';
import userRouter from "./routes/user.routes.js"; 

const app = express();

app.use(express.json());

// Define que todas as rotas do userRouter começam com /users
app.use("/users", userRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});