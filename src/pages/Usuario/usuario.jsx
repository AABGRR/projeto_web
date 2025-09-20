//import { Link } from 'react-router-dom'
//import Logo from '../img/pizza1.jpg'
//import imgProduto from '../img/ney2.jpg'
 
//npm install json-server
//npm install -g json-server
//npx json-server --watch db.json --port 3001
 
import React, { useState, useEffect } from "react";
import api from "axios";
import { useNavigate } from "react-router-dom";
import "./Usuario.css"; // certifique-se de que o caminho esteja correto

const Usuario = () => {
  const [vusuario, setUsuario] = useState([]);

  useEffect(() => {
    api.get("http://localhost:3001/usuario")
      .then((response) => setUsuario(response.data))
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
    e.preventDefault();
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
      if (response.data) {
        setMessage("Cadastro realizado com sucesso!");
        navigate("/");
      } else {
        setMessage("Erro ao realizar cadastro.");
      }
    } catch (error) {
      console.error(error);
      setMessage("Erro ao se conectar com o servidor.");
    }
  };

  return (
    <div className="usuario-container">
      <div className="usuario-card">
        <h2 className="usuario-title">Cadastro de Usuário</h2>

        <form className="usuario-form" onSubmit={handleSubmit}>
          <div className="usuario-form-group">
            <label htmlFor="nome">Nome</label>
            <input id="nome" className="usuario-input" type="text" value={vnome} placeholder="Nome" required onChange={(e) => setNome(e.target.value)} />
          </div>

          <div className="usuario-form-group">
            <label htmlFor="email">Email</label>
            <input id="email" className="usuario-input" type="email" value={vemail} placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="usuario-form-group">
            <label htmlFor="senha">Senha</label>
            <input id="senha" className="usuario-input" type="password" value={vsenha} placeholder="Senha" required onChange={(e) => setSenha(e.target.value)} />
          </div>

          <div className="usuario-form-row">
            <div className="usuario-form-group half">
              <label htmlFor="status">Status</label>
              <input id="status" className="usuario-input" type="text" value={vstatus} required onChange={(e) => setStatus(e.target.value)} />
            </div>

            <div className="usuario-form-group half">
              <label htmlFor="nivel">Nível de Acesso</label>
              <input id="nivel" className="usuario-input" type="text" value={vnivel} required onChange={(e) => setNivel(e.target.value)} />
            </div>
          </div>

          <div className="usuario-form-group">
            <label>Imagem do Usuário</label>
            <input type="file" accept="image/*" onChange={(e) => {
              const file = e.target.files[0];
              const reader = new FileReader();
              reader.onloadend = () => setImg(reader.result);
              if (file) reader.readAsDataURL(file);
            }} />
          </div>

          <div className="usuario-form-group">
            <button className="usuario-button" type="submit">Cadastrar Usuário</button>
          </div>
        </form>

        {vmessage && <p className="usuario-message">{vmessage}</p>}
      </div>
    </div>
  );
};

export default Usuario;

