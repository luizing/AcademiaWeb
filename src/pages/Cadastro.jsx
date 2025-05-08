import React, { useState } from 'react';
import supino from '../assets/cadastro.svg'; 

const Cadastro = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mensagem, setMensagem] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const user = { nome, email, senha };

        try {
            const response = await fetch('http://localhost:3001/api/usuarios', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            if (!response.ok) {
                throw new Error('Erro ao cadastrar usuário');
            }

            setMensagem('Usuário cadastrado com sucesso!');
            setNome('');
            setEmail('');
            setSenha('');
        } catch (error) {
            console.error('Erro ao cadastrar:', error);
            setMensagem('Erro ao cadastrar usuário.');
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.content}>
                <div style={styles.svgContainer}>
                    {/* Aqui usa a variável supino */}
                    <img 
                        src={supino} 
                        alt="Pessoa fazendo supino" 
                        style={styles.svgImage}
                    />
                </div>
                <div style={styles.formContainer}>
                    <h2 style={styles.title}>Cadastro de Usuário</h2>
                    <form onSubmit={handleSubmit} style={styles.form}>
                        <input
                            type="text"
                            placeholder="Nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            style={styles.input}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={styles.input}
                        />
                        <input
                            type="password"
                            placeholder="Senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            style={styles.input}
                        />
                        <button
                            type="submit"
                            style={styles.button}
                            onMouseOver={(e) => (e.target.style.backgroundColor = '#004494')}
                            onMouseOut={(e) => (e.target.style.backgroundColor = '#0056B3')}
                        >
                            Cadastrar
                        </button>
                    </form>

                    {mensagem && (
                        <div style={styles.popup}>
                            {mensagem}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        minHeight: '100vh',
        backgroundColor: '#0D0B1F', // Fundo roxo azulado
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '30px',
    },
    content: {
        display: 'flex',
        width: '90%',
        maxWidth: '1000px',
        backgroundColor: '#F5F7FA',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 4px 8px rgba(0, 86, 179, 0.3)',
    },
    svgContainer: {
        flex: 1,
        backgroundColor: '#1E293B', // Azul escuro para o fundo do SVG
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
    },
    svgImage: {
        width: '100%',
        maxWidth: '400px',
        height: 'auto',
    },
    formContainer: {
        flex: 1,
        padding: '40px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F7FA',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        width: '100%',
    },
    input: {
        padding: '12px',
        fontSize: '16px',
        borderRadius: '8px',
        border: '1px solid #90A4AE',
        backgroundColor: '#FFFFFF',
        transition: 'border-color 0.3s, box-shadow 0.3s',
    },
    button: {
        padding: '12px',
        fontSize: '16px',
        backgroundColor: '#0056B3',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontWeight: 'bold',
        letterSpacing: '0.5px',
        transition: 'background-color 0.3s',
    },
    popup: {
        marginTop: '20px',
        padding: '12px',
        backgroundColor: '#E1F5FE',
        color: '#0A192F',
        borderRadius: '8px',
        fontWeight: 'bold',
    },
    title: {
        marginBottom: '20px',
        color: '#0D0B1F',
    },
};

export default Cadastro;
