//import { Link } from 'react-router-dom'
//import Logo from '../img/pizza1.jpg'
//import imgProduto from '../img/ney2.jpg'
 
//npm install json-server
//npm install -g json-server
//npx json-server --watch db.json --port 3001
 
import api from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Usuario = () => {
    const [vusuario, setUsuario] = useState([]);

    useEffect(() => {
        api.get("http://localhost:3001/usuario")
            .then((response) => {
                setUsuario(response.data);
                console.log(response.data);
            })
            .catch(err => console.error("Erro ao Buscar os dados", err));
    }, []);

    const [vnome, setNome] = useState('');
    const [vemail, setEmail] = useState('');
    const [vsenha, setSenha] = useState('');
    const [vmessage, setMessage] = useState('');
    const [vimagem, setImg] = useState('');
    const [vstatus, setStatus] = useState('Ativo');
    const [vnivel, setNivel] = useState('user');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault(); // Impede o envio do formulário tradicional

        try {
            const response = await api.post("http://localhost:3001/usuario", {
                nome: vnome,
                email: vemail,
                senha: vsenha,
                Imagem: vimagem,
                status: vstatus,
                niveldeascesso: vnivel
            });

            console.log(response.data);

            // Verifica se a resposta foi bem-sucedida
            if (response.data) {
                setMessage("Cadastro realizado com sucesso!");
                // Redireciona para a página de login após o cadastro
                navigate("/"); // Navega para a página de login
            } else {
                setMessage("Erro ao realizar cadastro.");
            }
        } catch (error) {
            console.error(error);
            setMessage("Erro ao se conectar com o servidor.");
        }
    };

    return (
        <div className="app-container">
            <div className="main-content">
                Cadastro de Usuário
            </div>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Nome</label>
                    <input
                        type="text"
                        value={vnome}
                        placeholder="Nome"
                        required
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        value={vemail}
                        placeholder="Email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Senha</label>
                    <input
                        type="password"
                        value={vsenha}
                        placeholder="Senha"
                        required
                        onChange={(e) => setSenha(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Status</label>
                    <input
                        type="text"
                        value={vstatus}
                        required
                        onChange={(e) => setStatus(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Nível de Acesso</label>
                    <input
                        type="text"
                        value={vnivel}
                        required
                        onChange={(e) => setNivel(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Imagem do Usuario</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                            const file = e.target.files[0];
                            const reader = new FileReader();
                            reader.onloadend = () => {
                                setImg(reader.result); // Salva a imagem em base64 no estado vimagem
                            };
                            if (file) {
                                reader.readAsDataURL(file); // Lê o arquivo selecionado
                            }
                        }}
                    />
                </div>

                <div className="form-group">
                    <button type="submit">Cadastrar usuário</button>
                </div>
            </form>

            {vmessage && <p>{vmessage}</p>}
        </div>
    );
};

export default Usuario;
