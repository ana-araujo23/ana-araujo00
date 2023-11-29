import express from "express";
import cors from "cors";
import produtoRoutes from "./routes/rotasProdutos.js";
import { conn } from "./config/database.js";

const app = express();
const PORT = process.env.PORT || 4098;

app.use(express.json());
app.use(cors());

app.use("/", produtoRoutes);
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`);
    console.table({
        port:PORT,
        DataBase:conn()
    })
});
