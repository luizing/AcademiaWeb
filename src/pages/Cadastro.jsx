import { useState } from 'react';

function Cadastro() {
const [nome, setNome] = useState('');
const [email, setEmail] = useState('');
const [senha, setSenha] = useState('');
const [idade, setIdade] = useState('');
const [objetivo, setObjetivo] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
        // Aqui você pode processar os dados (enviar para a API ou armazenar localmente)
    alert('Cadastro realizado com sucesso!');
};

return (
    <div className="container mt-5">
    <h2 className="text-center">Cadastro de Aluno</h2>
    <div className="row justify-content-center">
        <div className="col-md-6">
        <div className="card p-4">
            <h3>Preencha os dados abaixo</h3>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="nome" className="form-label">Nome</label>
                <input
                type="text"
                id="nome"
                className="form-control"
                placeholder="Digite seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="senha" className="form-label">Senha</label>
                <input
                type="password"
                id="senha"
                className="form-control"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="idade" className="form-label">Idade</label>
                <input
                type="number"
                id="idade"
                className="form-control"
                placeholder="Digite sua idade"
                value={idade}
                onChange={(e) => setIdade(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="objetivo" className="form-label">Objetivo</label>
                <input
                type="text"
                id="objetivo"
                className="form-control"
                placeholder="Ex: Perder peso, ganhar massa, etc."
                value={objetivo}
                onChange={(e) => setObjetivo(e.target.value)}
                />
            </div>

            <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary">Cadastrar</button>
            </div>

            </form>
        </div>
        </div>
    </div>
    </div>
);
}

    export default Cadastro;
