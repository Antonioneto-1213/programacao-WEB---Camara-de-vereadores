import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cabecalho from './components/Cabecalho';
import Rodape from './components/Rodape';
import Home from './pages/Home';
import Vereadores from './pages/Vereadores';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <a className="pular-menu" href="#conteudo">Pular para o conteúdo principal</a>
      <Cabecalho />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vereadores" element={<Vereadores />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default App;