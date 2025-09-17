// npm install teact-hook-form
// npm install axios


import api from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Usuario = ()=> {

    const[vusuario, setUsuario] = useState([])

    useEffect(() =>{
        api.get("http://localhost:3001/usuario")
        .then((response)=>{
            setUsuario(response.data)
            console.log(response.data)
        })
        .catch(err => console.error("Erro ao Buscar os dados", err))

    },[]);

    const [vnome, setNome] = useState('')
    const [vemail, setEmail] = useState('')
    const [vsenha, setSenha] = useState('')
    const [message, setMessage] = useState('')

    const navigate = useNavigate();


    const handleSubmit = async () => {
        try {
            const response = await api.post("http://localhost:3001/usuario",
                {nome: vnome, email: vemail, senha: vsenha})
                console.log(response.data)
        }catch(error){
            console.log(error)
        }

         if (data.length > 0) {
          setMessage("Cadastro realizado com sucesso!");
          // Redireciona para Login
          navigate("/");
        } else {
          setMessage("Erro ao realizar cadastro.");
        }
    

};

    

    return(
        <div className="app-container">


        <div className="main-content">
            Cadastro de Usuário
        </div>

        <form>
            <div className="form-group">
                <label>Nome</label>
                <input type="text" placeholder="Nome " required onChange={(e) => setNome(e.target.value)} />

            </div>

            <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />

            </div>

            <div className="form-group">
                <label>Senha</label>
                <input type="password" placeholder="Senha" required onChange={(e) => setSenha(e.target.value)} />

            </div>


            <div className="form-group">
                <button onClick={handleSubmit}>Cadastrar usuario</button>
            </div>





        </form>

      

       




    </div>
           
        
    );
}
export default Usuario;
