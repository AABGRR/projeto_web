import api from "axios";
import React, { useState, useEffect } from "react";


function Home() {

    //Consulta os dados ao carregar a tela
    const [vusuario, setUsuario] = useState([])  //Consulta os dados

    useEffect(() => {
        api.get("http://localhost:3001/usuario")
            .then((response) => {
                setProduto(response.data)
                console.log(response.data)
            })
            .catch(err => console.error("Erro ao Buscar os dados", err))

    }, []);

    return (

        <div className="app-container">
            <div className="main-content">
                Usuarios Cadastrados
            </div>


            <div className="cards-container">
                {vusuario.map((usuario) => (
                    <div key={produto.id} className="produto-card">
                        {produto.imagem && (
                            <img src={usuario.imagem} alt={vimagem} className="produto-imagem" />
                        )}
                        <h3>{vnome}</h3>
                        
                    </div>
                ))}
            </div>
        </div>
    
    );
}
export default Home;