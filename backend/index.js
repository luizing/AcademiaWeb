const express = require("express");
const cors = require("cors");
const pool = require("./config/db"); // Conexão com o banco de dados
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const rotasUsuarios = require("./routes/usuarios");
app.use("/api", rotasUsuarios);

// Conexão com o banco de dados
pool.connect()
    .then(() => {
        console.log("Conexão bem-sucedida com o banco de dados");

        // Iniciando o servidor apenas após a conexão com o banco ser bem-sucedida
        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    })
    .catch((err) => {
        console.error("Erro ao conectar ao banco de dados", err.stack);
    });
