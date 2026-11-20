# Changelog - Portal da Câmara Municipal de Floresta do Piauí

**Disciplina:** Programação Web  
**Projeto:** Migração de Aplicação Legada (HTML/CSS/JS) para Single Page Application (SPA) com React  
**Etapa Atual:** Entrega Parcial 1  

Todas as alterações notáveis deste projeto de migração serão documentadas neste ficheiro, seguindo o padrão *Keep a Changelog*.

---

## [Unreleased] / Planeado para a Entrega Parcial 2
- **Migração de Páginas:** Conversão das páginas restantes do sistema legado (`Projetos de Lei`, `Notícias`, `Sobre a Câmara` e `Contato`) para componentes React.
- **Comunicação Assíncrona (Fetch API):** Criação dos ficheiros JSON e integração via `fetch` para o carregamento dinâmico dos Projetos de Lei e notícias.
- **Funcionalidades Interativas:** Migração do sistema de favoritos (armazenamento local) e do seletor de acessibilidade/tema (modo claro e escuro).
- **Refinamento de Navegação:** Substituição de todas as âncoras HTML tradicionais pelo componente `<Link>` do `react-router-dom` no menu principal.

---

## [1.0.0] - 2026-11-20 (Entrega Parcial 1)
### Adicionado
- **Configuração de Ambiente:** Inicialização da estrutura base do projeto utilizando **React** com **Vite** (template JavaScript) e configuração do **ESLint** para padronização de código.
- **Arquitetura de Pastas:** Organização modular do código-fonte em diretórios específicos (`src/components` para elementos globais, `src/pages` para visualização de rotas, `public/imagens` para ficheiros estáticos e `public/data` para dados estruturados).
- **Componentização Global:** Criação dos componentes reutilizáveis `Cabecalho.jsx` e `Rodape.jsx` a partir da estrutura HTML original.
- **Página Inicial (`Home.jsx`):** Migração da página de apresentação da Câmara Municipal, mantendo a estrutura semântica e links de acessibilidade ("Pular para o conteúdo principal").
- **Página de Vereadores (`Vereadores.jsx`):** Implementação da listagem de parlamentares com filtro de pesquisa em tempo real por nome (`useState`).
- **Consumo de Dados (Fetch API):** Criação do ficheiro `public/data/vereadores.json` e implementação da busca assíncrona com `useEffect` e `fetch` para renderizar os cards dos vereadores dinamicamente.
- **Roteamento SPA:** Instalação e configuração do `react-router-dom` (`BrowserRouter`, `Routes`, `Route`) no ficheiro `App.jsx` para navegação fluida entre a Home (`/`) e Vereadores (`/vereadores`).

### Alterado
- **Gestão de Ativos (Assets):** Migração das fotografias dos vereadores e imagens do plenário para a pasta `public/imagens`, adaptando os caminhos relativos para a arquitetura do Vite.
- **Estilização:** Unificação e adaptação das folhas de estilo originais para o ficheiro global `src/index.css`.