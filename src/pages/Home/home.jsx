 
import api from "axios";
import React, { useState, useEffect } from "react";
 
 
function Home() {
 
    //busca os dados ao carregar a tela
 
    const [vproduto, setCursos] = useState([])
 
    useEffect(() => {
 
        api.get("http://localhost:3001/cursos")
            .then((response) => {
                setCursos(response.data)
                console.log(response.data)
 
            })
 
            .catch(err => console.log("Erro ao buscar os dados", err))
    }, [])
 
 
 
   
    return (
 
        <div className="app-container">
            <div className="main-content">
                Cardápio Pizzas
            </div>
 
 
            <div className="cards-container">
                {vproduto.map((prod) => (
                    <div key={prod.id} className="produto-card">
                        {produto.imagem && (
                            <img src={prod.imagem} alt={prod.nome} className="produto-imagem" />
                        )}
                        <h3>{prod.nome}</h3>
                        <p>R$ {prod.preco}</p>
                    </div>
                ))}
            </div>
        </div>
   
    );
}
export default Home;
 
 