import { Link } from 'react-router-dom';

function Dashboard() {
    return (
    <div className="container mt-5">
        <h2 className="text-center">Dashboard</h2>
        <div className="card p-4">
                <h3>Bem-vindo ao painel da academia!</h3>
                <p>Aqui você pode ver o progresso e gerenciar seus dados.</p>
                <div className="text-center">
                    <Link to="/" className="btn btn-secondary">Voltar ao Login</Link>
                </div>
        </div>
</div>
);
}

export default Dashboard;
