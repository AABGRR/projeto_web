import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <header className="menu-header">
      <div className="menu-container">
        <h1 className="menu-logo">LEARNLY</h1>

        <nav className="menu-nav">
          <Link to="/home" className="menu-link">Home</Link>
          <Link to="/produto" className="menu-link">Produto</Link>
          <Link to="/generico" className="menu-link">Curso</Link>
          <Link to="/perfil" className="menu-link">Perfil</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
