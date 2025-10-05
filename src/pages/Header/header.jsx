import { Link } from "react-router-dom";
import { useState } from "react";
import "./header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="menu-header">
      <div className="menu-container">
        {/* Botão hamburguer no lado esquerdo */}
        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Logo centralizado */}
        <h1 className="menu-logo">LEARNLY</h1>
        
      </div>

      {/* Menu lateral */}
      <nav className={`menu-nav ${menuOpen ? "active" : ""}`}>
        <Link to="/home" className="menu-link" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/produto" className="menu-link" onClick={() => setMenuOpen(false)}>Produto</Link>
        <Link to="/generico" className="menu-link" onClick={() => setMenuOpen(false)}>Curso</Link>
        <Link to="/perfil" className="menu-link" onClick={() => setMenuOpen(false)}>Perfil</Link>
      </nav>
    </header>
  );
}

export default Header;
