const pool = require("../config/db");

const Usuario = {
    async criar(nome, email, senhaHash) {
        try {
            const query = "INSERT INTO usuarios (nome, email, senha) VALUES ($1, $2, $3)";
            const values = [nome, email, senhaHash];
            await pool.query(query, values);
        } catch (err) {
            console.error("Erro ao inserir usuário: ", err);
            throw new Error("Erro ao inserir usuário no banco de dados.");
        }
    }
};

module.exports = Usuario;
