// Em src/components/AuthForm.jsx
import React, { useState } from 'react';
import '../styles/cadastro.css';

const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(true); // Para alternar entre cadastro e login

    return (
        <div className={`form-container ${isSignUp ? 'sing-up' : 'sign-in'}`}>
        {isSignUp ? (
            <form>
            <h1>Criar Conta</h1>
            <div className="social-icons">
                <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
                <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
            <span>ou use seu email para se registrar</span>
            <input type="text" placeholder="Nome" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Senha" />
            <button>Cadastrar</button>
            </form>
        ) : (
            <form>
            <h1>Entrar</h1>
            <div className="social-icons">
                <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
                <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
            <span>ou use seu email e senha</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Senha" />
            <a href="#">Esqueceu sua senha?</a>
            <button>Entrar</button>
            </form>
        )}
        </div>
    );
};

export default AuthForm;
