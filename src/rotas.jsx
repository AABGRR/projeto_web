//npm install react-router-dom
import { BrowserRouter, Routes, Route,Outlet } from "react-router-dom";
import Header from './pages/Header/header';
import Home from './pages/Home/home';
import Produto from './pages/Produto/produto';

import Formulario from './pages/Formulario/formulario';
import Generico from './pages/Generico/generico';

import Login from './pages/Login/login';
import Usuario from './pages/Usuario/usuario';
import Usuarioo from './pages/Usuario/usuario_layout';

 
function RoutesApp (){

    return(
          <BrowserRouter>
           
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/usuario" element={<Usuario/>}/>
                    

                    <Route element={<Layout/>}>

                        <Route path="/home" element={<Home/>}/>
                        <Route path="/produto" element={<Produto/>}/>
                        <Route path="/formulario" element={<Formulario/>}/>
                        <Route path="/generico" element={<Generico/>}/>
                        <Route path="/usuario_layout" element={<Usuarioo/>}/>
                        
                    </Route>    
                </Routes>
           </BrowserRouter>  

    );     

}

    function Layout(){
        return(
            <>
             <Header/>{/*exibe o cabeçalho*/ }
             <main>
                <Outlet/>{/*corpo da pagina*/}
             </main>

            </>

        )
    }


export default RoutesApp
