import { Link } from 'react-router-dom'
import Logo from '../img/logo.jpg'

function Header(){

    return(
        <header>
            <div>
                <img src={Logo} alt="Logo" title="Logo Pizza" />
            </div>
            <nav>
                <a href="/home" className="abas">Home</a>
                <span className="separador">|</span>
                <a href="/produto" className="abas">Produto</a>
                <span className="separador">|</span>
                <a href="/generico" className="abas">Curso</a>
                <span className="separador">|</span>
                <a href="/usuario_layout" className="abas">Perfil</a>
                

                
            </nav>
        </header>
    );
}
export default Header;
