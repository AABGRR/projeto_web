//import { Link } from 'react-router-dom'
//import Logo from '../img/pizza1.jpg'
//import imgProduto from '../img/ney2.jpg'


//npm install json-server
//npm install -g json-server
//npx json-server --watch db.json --port 3001


import api from "axios";
import React, {useState, useEffect} from "react";


const Produto=()=>{


        const [vproduto,setProduto]=useState([])


        const[vnome, setNome]= useState('')
        const[vdesc, setDesc]= useState('')
        const[vpreco, setPreco]= useState('')
        const[vimagem, setImg]= useState('')


        //busca os dados ao carregar a tela


        useEffect(()=>{


            api.get("http://localhost:3001/produto")
            .then((response)=>{
                setProduto(response.data)
                console.log(response.data)


            })


            .catch(err => console.log("Erro ao buscar os dados",err))
        },[])



        const hanlesubmit= async()=>{


            try{


                const response=await api.post( "http://localhost:3001/produto",
                    {nome: vnome, descricao: vdesc, preco: vpreco, imagem:vimagem})
               
                console.log(response.data)


            }catch(error){
                console.log(error)
            }
   
        };


         const handleDelete = async (id) =>{
            try {
                await api.delete(`http://localhost:3001/produto/${id}`);
 
                //Atualiza a lista após deletar
                const res = await api.get("http://localhost:3001/produto");
                setCursos(res.data);
                   
            }catch(error){
                console.log("erro ao deletar produto", error)
            }
   
    };


    return(


            <div className="app-container">
                <div className="main-content">


                Cadastro de Produto
           
                <form>
                    <div className="form-group">
                    <label> Nome do produto</label>
                    <input type="text" placeholder="Nome do produto" required onChange={(e)=>setNome(e.target.value)}/>
                       
                    </div>
                </form>
               
                <form>
                    <div className="form-group">
                    <label> Descrição do produto</label>
                    <input type="text" placeholder="Descrição do produto" onChange={(e)=>setDesc(e.target.value)} />
                    </div>
                </form>
               
                <form>
                    <div className="form-group">
                    <label> Preço de venda</label>
                    <input type="text" placeholder="Preço de venda" onChange={(e)=>setPreco(e.target.value)}/>
                    </div>
                </form>
               


            <div className="form-group">
             <label>Imagem do Produto</label>
                <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                const reader = new FileReader();
                reader.onloadend = () => {
                  setImg(reader.result); // Salva a imagem em base64 no estado vimg
                };
                if (file) {
                  reader.readAsDataURL(file); // Lê o arquivo selecionado
                }
              }}
            />
          </div>


                <form>
                    <div className="form-group">
                    <button onClick={hanlesubmit}>Cadastrar Produto</button>
                    </div>
                </form>


                <div className="main-content">
                    Cadastro de produto
                </div>


                <ul>
                    {vproduto.map(prod=>(
                        <li key={prod.id}>Nome:{prod.nome}| Preço:{prod.preco}
                       
                          <br />
                    <div>
                        <button>Editar</button>
                        <button onClick={()=>handleDelete(prod.id)}>Deletar</button>
                    </div>
                       
                                  
                       
                        </li>
                    ))}
                </ul>



                </div>
       
            </div>
       
    );
}
export default Produto;


 