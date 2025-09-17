//import { Link } from 'react-router-dom'
//import Logo from '../img/pizza1.jpg'
//import imgProduto from '../img/ney2.jpg'


//npm install json-server
//npm install -g json-server
//npx json-server --watch db.json --port 3001


import { useState , useEffect } from 'react';
import api from 'axios'
import { useNavigate } from "react-router-dom";


const Login = () => {
       
    {/*inicio*/}


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
          // Redireciona para a Home
          navigate("/home");
        } else {
          setMessage("Email ou senha inválidos.");
        }
      } catch (error) {
        setMessage("Erro ao conectar com o servidor.");
      }
    };


    return(


            <div className="app-container">
                <div className="main-content">


                LOGIN
           
           
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                    <label> email</label>
                    <input type="text" placeholder="digite seu email" value= {email} required onChange={(e)=>setEmail(e.target.value)}/>
                       
                    </div>
           
               
                    <div className="form-group">
                    <label> senha </label>
                    <input type="password" placeholder="Digite sua Senha" value= {senha} required onChange={(e)=>setSenha(e.target.value)} />
                    </div>
       
               
                    <div className="form-group">
                    <button type="Submit">Entrar</button>
                    </div>
                </form>


                    {message && <p>{message}</p> }


                <div className="register-link">
                    <p>
                        Não tem uma conta? <a href="/usuario">Cadastra-se</a>
                    </p>
                </div>


                </div>
       
            </div>
       
    );
}
export default Login;


 