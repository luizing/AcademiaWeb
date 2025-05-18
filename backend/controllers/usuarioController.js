const bcrypt = require("bcrypt");
const Usuario = require("../models/Usuario");
const pool = require("../config/db");


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
            await Usuario.criar(nome, email, senhaHash);
            res.status(201).json({ mensagem: "Usuário cadastrado com sucesso!" });
        } catch (err) {
            console.error(err);
            res.status(500).json({ mensagem: "Erro ao cadastrar usuário." });
        }
    },

    async login(req, res) {
        const { email, senha } = req.body;

        if (!email || !senha) {
            return res.status(400).json({ mensagem: "E-mail e senha são obrigatórios." });
        }

        try {
            const result = await pool.query("SELECT * FROM usuarios WHERE email = $1", [email]);
            const usuario = result.rows[0];

            if (!usuario) {
                return res.status(401).json({ mensagem: "Usuário não encontrado." });
            }

            const senhaValida = await bcrypt.compare(senha, usuario.senha);
            if (!senhaValida) {
                return res.status(401).json({ mensagem: "Senha inválida." });
            }

            res.status(200).json({
                mensagem: "Login realizado com sucesso!",
                usuario: {
                    id: usuario.id,
                    nome: usuario.nome,
                    email: usuario.email
                }
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ mensagem: "Erro ao realizar login." });
        }
    }
};

module.exports = usuarioController;
