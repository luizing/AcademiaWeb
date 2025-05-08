const bcrypt = require("bcrypt");
const Usuario = require("../models/Usuario");
const pool = require("../config/db");  // Importando o pool de conexões do banco de dados.

const usuarioController = {
    async cadastrar(req, res) {
        const { nome, email, senha } = req.body;

        if (!nome || !email || !senha) {
            return res.status(400).json({ mensagem: "Todos os campos são obrigatórios." });
        }

        try {

            const result = await pool.query("SELECT * FROM usuarios WHERE email = $1", [email]);
            if (result.rows.length > 0) {
                return res.status(400).json({ mensagem: "E-mail já cadastrado." });
            }

            const senhaHash = await bcrypt.hash(senha, 12);

            // Chama o modelo para criar o usuário
            await Usuario.criar(nome, email, senhaHash);
            res.status(201).json({ mensagem: "Usuário cadastrado com sucesso!" });
        } catch (err) {
            console.error(err);
            res.status(500).json({ mensagem: "Erro ao cadastrar usuário." });
        }
    }
};

module.exports = usuarioController;
