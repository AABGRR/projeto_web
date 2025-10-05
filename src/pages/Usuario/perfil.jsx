import api from "axios";
import React, { useState, useEffect } from "react";

function Perfil() {
    // Consulta os dados ao carregar a tela
    const [vusuario, setUsuario] = useState([]); // Consulta os dados

    useEffect(() => {
        api.get("http://localhost:3001/usuario")
            .then((response) => {
                setUsuario(response.data);
                console.log(response.data);
            })
            .catch(err => console.error("Erro ao Buscar os dados", err));
    }, []);

    return (
        <div className="app-container">
            <div className="main-content">
                Usuários Cadastrados
            </div>

            <div className="cards-container">
                {vusuario.map((usuario) => (
                    <div key={usuario.id} className="produto-card">
                        {usuario.imagem && (
                            <img src={usuario.imagem} alt={usuario.nome} className="usuario-imagem" />
                        )}
                        <h3>{usuario.nome}</h3>
                        <p>{usuario.email}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Perfil;
