// npm install teact-hook-form
// npm install axios


import api from "axios";
import React, { useState, useEffect } from "react";
import "./generico.css";

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

    // 🔹 ADICIONADO: estado para saber se está editando
    const [editId, setEditId] = useState(null);

    const handleSubmit = async (e) =>{
        e.preventDefault(); // 🔹 corrigido preventDefalt -> preventDefault
        try {
            if (editId) {
                // 🔹 Se tiver editId, faz update (PUT)
                const response = await api.put(`http://localhost:3001/generico/${editId}`, {
                    nome: vnome,
                    materia: vmat,
                    descricao: vdesc,
                    nomeprof: vnomeprof,
                    carga: vcarga,
                    instituicao: vinst
                });
                console.log("Atualizado:", response.data);
            } else {
                // 🔹 Caso contrário, faz o POST normal
                const response = await api.post("http://localhost:3001/generico", {
                    nome: vnome,
                    materia: vmat,
                    descricao: vdesc,
                    nomeprof: vnomeprof,
                    carga: vcarga,
                    instituicao: vinst
                });
                console.log("Cadastrado:", response.data);
            }

            // 🔹 Atualiza lista e limpa formulário
            const res = await api.get("http://localhost:3001/generico");
            setCursos(res.data);
            setEditId(null);
            setNome('');
            setMat('');
            setDesc('');
            setNomeprof('');
            setCarga('');
            setInst('');

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

    // 🔹 ADICIONADO: função para editar
    const handleEdit = (curso) => {
        setEditId(curso.id);
        setNome(curso.nome);
        setMat(curso.materia);
        setDesc(curso.descricao);
        setNomeprof(curso.nomeprof);
        setCarga(curso.carga);
        setInst(curso.instituicao);
    };

    return(
        <div className="app-container">

            <div className="main-content">
                Cadastro do Curso 
            </div>    
            
            <form>
                <div className="form-group">
                    <label>Nome do Curso</label>
                    <input type="text" placeholder="Nome do Curso" required value={vnome} onChange={(e) => setNome(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Matéria envolvida</label>
                    <input type="text" placeholder="Matéria envolvida" required value={vmat} onChange={(e) => setMat(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label>Nome do Professor</label>
                    <input type="text" placeholder="Nome do Professor" required value={vnomeprof} onChange={(e) => setNomeprof(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label>Descrição do Curso</label>
                    <input type="text" placeholder="Descrição do Curso" required value={vdesc} onChange={(e) => setDesc(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label>Carga Horária do Curso</label>
                    <input type="text" placeholder="Carga Horária do Curso" required value={vcarga} onChange={(e) => setCarga(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label>Instituição de Ensino</label>
                    <input type="text" placeholder="Instituição de Ensino" required value={vinst} onChange={(e) => setInst(e.target.value)}/>
                </div>

                <div className="form-group">
                    <button onClick={handleSubmit}>
                        {editId ? "Salvar Alterações" : "Cadastrar Curso"}
                    </button>
                </div>
            </form>

            <div className="main-content">
                Cadastro de Cursos
            </div>

            <ul>
                {vcursos.map(curso => (
                    <li key={curso.id}>
                        Nome: {curso.nome} | Descrição: {curso.descricao} | Matéria: {curso.materia}
                        <br />
                        <div>
                            <button onClick={() => handleEdit(curso)}>Editar</button>
                            <button onClick={() => handleDelete(curso.id)}>Deletar</button>
                        </div>
                    </li>
                ))}
            </ul>     
        </div>
    )
};

export default Generico;
