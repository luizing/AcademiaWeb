import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/Auth.css';

const Auth = () => {
  const [isActive, setIsActive] = useState(false);

  // Estados para cadastro
  const [nome, setNome] = useState('');
  const [emailCadastro, setEmailCadastro] = useState('');
  const [senhaCadastro, setSenhaCadastro] = useState('');

  // Estados para login
  const [emailLogin, setEmailLogin] = useState('');
  const [senhaLogin, setSenhaLogin] = useState('');

  // Função para cadastrar usuário
  const handleCadastro = async () => {
    if (!nome || !emailCadastro || !senhaCadastro) {
      alert('Por favor, preencha todos os campos de cadastro.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/api/usuarios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, email: emailCadastro, senha: senhaCadastro }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.mensagem);
        // Limpar campos
        setNome('');
        setEmailCadastro('');
        setSenhaCadastro('');
        setIsActive(false); // volta para tela de login
      } else {
        alert(data.mensagem || 'Erro ao cadastrar');
      }
    } catch (error) {
      alert('Erro ao conectar com o servidor.');
      console.error(error);
    }
  };

  // Função para login (placeholder, pode ser implementada depois)
  const handleLogin = () => {
    alert('Função de login ainda não implementada.');
  };

  return (
    <div className={`container ${isActive ? 'active' : ''}`} id="container">
      <div className="form-container sign-up">
        <form onSubmit={e => e.preventDefault()}>
          <h1>Criar Conta</h1>
          <div className="social-icons">
            <a href="#" className="icon"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="icon"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="icon"><i className="fab fa-github"></i></a>
            <a href="#" className="icon"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span>ou use seu email para se registrar</span>
          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={e => setNome(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={emailCadastro}
            onChange={e => setEmailCadastro(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            value={senhaCadastro}
            onChange={e => setSenhaCadastro(e.target.value)}
          />
          <button type="button" onClick={handleCadastro}>Cadastrar</button>
        </form>
      </div>

      <div className="form-container sign-in">
        <form onSubmit={e => e.preventDefault()}>
          <h1>Entrar</h1>
          <div className="social-icons">
            <a href="#" className="icon"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="icon"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="icon"><i className="fab fa-github"></i></a>
            <a href="#" className="icon"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span>ou use seu email e senha</span>
          <input
            type="email"
            placeholder="Email"
            value={emailLogin}
            onChange={e => setEmailLogin(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            value={senhaLogin}
            onChange={e => setSenhaLogin(e.target.value)}
          />
          <a href="#">Esqueceu sua senha?</a>
          <button type="button" onClick={handleLogin}>Entrar</button>
        </form>
      </div>

      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Bem-vindo de volta!</h1>
            <p>Entre com seus dados pessoais para usar todos os recursos do site.</p>
            <button className="hidden" id="login" onClick={() => setIsActive(false)}>Entrar</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Olá, amigo!</h1>
            <p>Cadastre-se com seus dados pessoais para usar todos os recursos do site.</p>
            <button className="registar" id="register" onClick={() => setIsActive(true)}>Cadastre-se</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
