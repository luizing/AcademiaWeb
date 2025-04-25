import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="container mt-5">
        <h2 className="text-center">Login</h2>
        <div className="row justify-content-center">
            <div className="col-md-6">
            <div className="card p-4">
                <h3>Acesse sua conta da academia</h3>
                <form>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Usuário</label>
                    <input type="text" id="username" className="form-control" placeholder="Digite seu usuário" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Senha</label>
                    <input type="password" id="password" className="form-control" placeholder="Digite sua senha" />
                </div>
                <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary">Entrar</button>
                </div>
                <div className="text-center mt-3">
                    <Link to="/cadastro" className="btn btn-secondary">Cadastrar-se</Link>
                </div>
                </form>
                <div className="text-center mt-3">
                <Link to="/dashboard" className="btn btn-secondary">Ir para o Dashboard</Link>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
    }

    export default Login;
