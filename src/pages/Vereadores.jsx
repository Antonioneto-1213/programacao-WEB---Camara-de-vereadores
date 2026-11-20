import { useState, useEffect } from 'react';

export default function Vereadores() {
  const [vereadores, setVereadores] = useState([]);
  const [busca, setBusca] = useState('');

  useEffect(() => {
    fetch('/data/vereadores.json')
      .then((res) => res.json())
      .then((dados) => setVereadores(dados))
      .catch((erro) => console.error('Erro ao buscar vereadores:', erro));
  }, []);

  const vereadoresFiltrados = vereadores.filter((v) =>
    v.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <main id="conteudo">
      <section className="secao" id="vereadores">
        <h2>Nossos Vereadores</h2>

        <div className="pesquisa-vereadores">
          <label htmlFor="buscar-vereador">Pesquisar vereador:</label>
          <input
            type="search"
            id="buscar-vereador"
            placeholder="Digite o nome..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
        </div>

        <div className="cards">
          {vereadoresFiltrados.map((vereador) => (
            <article className="card" key={vereador.id}>
              <img src={vereador.foto} alt={`Foto de ${vereador.nome}`} />
              <h3>{vereador.nome}</h3>
              <p>Partido: {vereador.partido}</p>
              <p className="cargo">{vereador.cargo}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}