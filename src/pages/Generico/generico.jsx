// npm install teact-hook-form
// npm install axios


import api from "axios";
import React, { useState, useEffect } from "react";
const Generico = ()=> {

        const[vcursos, setCursos] = useState([])

        useEffect(() =>{
            api.get("http://localhost:3001/generico")
            .then((response)=>{
                setCursos(response.data)
                console.log(response.data)
            })
            .catch(err => console.error("Erro ao Buscar os dados", err))
    
        },[]);
    
    

        const [vnome, setNome] = useState('')
        const [vmat, setMat] = useState('')
        const [vdesc, setDesc] = useState('')
        const [vnomeprof, setNomeprof] = useState('')
        const [vcarga, setCarga] = useState('')
        const [vinst, setInst] = useState('')

       
        const handleSubmit = async (e) =>{
            e.preventDefalt();
            try {
                const response = await api.post("http://localhost:3001/generico",
                    {nome: vnome, materia: vmat, descricao: vdesc, nomeprof: vnomeprof, carga: vcarga, instituicao: vinst })
                    console.log(response.data)
            }catch(error){
                console.log(error)
            }
    
    };

    // função adicionada: para deletar produto
     const handleDelete = async (id) =>{
            try {
                await api.delete(`http://localhost:3001/generico/${id}`);

                //Atualiza a lista após deletar
                const res = await api.get("http://localhost:3001/generico");
                setCursos(res.data);
                    
            }catch(error){
                console.log("erro ao deletar produto", error)
            }
    
    };

    

    
    

    return(
      
            <div className="app-container">


                 <div className="main-content">
                   Cadastro do Curso 
                 </div>    
                
                    <form>
                        <div className="form-group">
                            <label>Nome do Curso</label>
                            <input type="text" placeholder="Nome do Curso" required onChange={(e) => setNome(e.target.value)} />
                            
                        </div>
                        <div className="form-group">
                            <label>Matéria envolvida</label>
                            <input type="text" placeholder="Matéria envolvida" required onChange={(e) => setMat(e.target.value)}/>
                            
                        </div>
                        <div className="form-group">
                            <label>Nome do Professor</label>
                            <input type="text" placeholder="Nome do Professor" required onChange={(e) => setNomeprof(e.target.value)}/>
                            
                        </div>
                        <div className="form-group">
                            <label>Descrição do Curso</label>
                            <input type="text" placeholder="Descrição do Curso" required onChange={(e) => setDesc(e.target.value)}/>
                            
                        </div>
                        <div className="form-group">
                            <label>Carga Horária do Curso</label>
                            <input type="text" placeholder="Carga Horária do Curso" required onChange={(e) => setCarga(e.target.value)}/>
                            
                        </div>
                        <div className="form-group">
                            <label>Instituição de Ensino</label>
                            <input type="text" placeholder="Instituição de Ensino" required onChange={(e) => setInst(e.target.value)}/>
                            
                        </div>
                       

                        <div className="form-group">
                <button onClick={handleSubmit}>Cadastrar Curso</button>
            </div>

                        
                        
                    </form>

                    <div className="main-content">
            Cadastro de Cursos
        </div>

        <ul>
            {vcursos.map(curso=>(
                <li key={curso.id}>Nome : {curso.nome}|Descrição: {curso.descricao}|Matéria: {curso.materia}
                    <br />
                    <div>
                        <button>Editar</button>
                        <button onClick={()=>handleDelete(curso.id)}>Deletar</button>
                    </div>
                
                </li>
            ))}
        </ul>






            </div>

            
           
        
    );
}
export default Generico;
