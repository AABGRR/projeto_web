import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./login.css";


const Login = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:3001/usuario?email=${email}&senha=${senha}`);
            const data = await response.json();

            if (data.length > 0) {
                setMessage("Login realizado com sucesso!");
                navigate("/home");
            } else {
                setMessage("Email ou senha inválidos.");
            }
        } catch (error) {
            setMessage("Erro ao conectar com o servidor.");
        }
    };

    return (
        <div className="login-container">
            <div className="login-content">
                LOGIN
                <form className="login-form" onSubmit={handleLogin}>
                    <div className="login-form-group">
                        <label>Email</label>
                        <input
                            type="text"
                            placeholder="Digite seu email"
                            value={email}
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="login-form-group">
                        <label>Senha</label>
                        <input
                            type="password"
                            placeholder="Digite sua senha"
                            value={senha}
                            required
                            onChange={(e) => setSenha(e.target.value)}
                        />
                    </div>

                    <div className="login-form-group">
                        <button type="submit">Entrar</button>
                    </div>
                </form>

                {message && <p className="login-message">{message}</p>}

                <div className="login-register-link">
                    <p>
                        Não tem uma conta? <a href="/usuario">Cadastre-se</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
