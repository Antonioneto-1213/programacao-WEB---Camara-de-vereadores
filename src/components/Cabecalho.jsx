import { Link } from 'react-router-dom';

export default function Cabecalho() {
  return (
    <header className="cabecalho">
      <div className="cabecalho-interno">
        <Link className="logo" to="/">
          Câmara Municipal de Floresta do Piauí
        </Link>
        <nav className="menu" aria-label="Menu principal">
          <ul>
            <li><Link to="/">Início</Link></li>
            <li><Link to="/vereadores">Vereadores</Link></li>
            <li><Link to="/projetos">Projetos de Lei</Link></li>
            <li><Link to="/preferencias">Preferências</Link></li>
          </ul>
        </nav>
        <button type="button" className="botao-tema">Tema escuro</button>
      </div>
    </header>
  );
}