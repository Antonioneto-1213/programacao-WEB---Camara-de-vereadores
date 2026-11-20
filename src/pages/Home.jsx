import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main id="conteudo">
      <section className="banner">
        <div className="banner-texto">
          <h1>Bem-vindo à Câmara de Floresta do Piauí</h1>
          <p>Acompanhe as sessões, conheça seus vereadores e fique por dentro dos projetos que mudam a nossa cidade.</p>
          <Link className="botao" to="/projetos">Ver projetos de lei</Link>
        </div>
        <img src="/imagens/Plenario Câmara.png" alt="Plenário da Câmara Municipal" />
      </section>
    </main>
  );
}