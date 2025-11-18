import express from 'express';
import userRouter from './src/routes/user.routs.js';
import { user } from 'react';
const app = express();


// --- NOVIDADE 1: Essa linha permite que o servidor entenda JSON enviado pelo usuário ---
app.use(express.json()); 

app.use(userRouters)

app.listen(3000, () => {
    console.log(`Servidor rodando na porta 3000`);
});