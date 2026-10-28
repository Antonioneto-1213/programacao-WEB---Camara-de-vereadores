# Changelog — Câmara Municipal de Floresta do Piauí

Registro das alterações e funcionalidades desenvolvidas no Trabalho 02 da disciplina de Programação para Web I (PWEB I), da Universidade Federal do Piauí (UFPI).

---

## [28/10/2026] — Entrega Final

### Funcionalidades adicionadas

**1. Ampliação do catálogo de projetos de lei**
- Expansão do catálogo de 3 para 10 projetos de lei fictícios.
- Inclusão de informações sobre a situação de cada projeto: aprovado, em tramitação ou arquivado.
- Organização dos projetos em um array de objetos JavaScript.
- Geração dinâmica dos elementos HTML utilizando manipulação do DOM.

**2. Pesquisa, filtros e ordenação de projetos**
- Implementação de pesquisa por número, título ou descrição do projeto.
- Filtro dinâmico por situação legislativa.
- Ordenação dos projetos por data, dos mais recentes aos mais antigos e vice-versa.
- Exibição automática da quantidade de projetos encontrados.
- Atualização dos resultados sem necessidade de recarregar a página.
- Integração com o sistema de favoritos existente.

**3. Alternância entre tema claro e escuro**
- Implementação de botão para alternar entre os temas.
- Adaptação das cores dos componentes da interface.
- Armazenamento da preferência no `localStorage`.
- Recuperação automática do tema selecionado ao acessar novamente a página.

**4. Sistema de preferências visuais**
- Implementação de opções para aumentar o tamanho da fonte.
- Possibilidade de alterar o espaçamento dos cards.
- Adição de modo de alto contraste.
- Aplicação dinâmica das alterações por meio de classes CSS e JavaScript.
- Persistência das configurações no `localStorage`.
- Implementação de botão para restaurar as preferências visuais.

**5. Gerenciamento de cookies**
- Implementação de aviso de consentimento para utilização de cookies opcionais.
- Disponibilização das opções de aceitar, rejeitar ou configurar preferências.
- Implementação de controles para exibir ou ocultar:
  - Banner principal.
  - Datas dos projetos de lei.
  - Contador de projetos encontrados.
  - Dicas de navegação.
- Aplicação dinâmica das preferências selecionadas.
- Persistência das configurações utilizando cookies.
- Remoção dos cookies opcionais em caso de rejeição.

**6. Gerenciamento de sessão**
- Implementação do armazenamento temporário com `sessionStorage`.
- Persistência da pesquisa de vereadores durante a sessão.
- Persistência da pesquisa e dos filtros de projetos.
- Armazenamento da ordenação selecionada.
- Registro da última seção acessada pelo menu.
- Restauração das pesquisas e filtros ao atualizar a página.

### Armazenamento de dados

Foram implementados os três mecanismos de armazenamento exigidos pelo trabalho.

**localStorage — 5 chaves**
- `projetosFavoritos`: armazena os projetos favoritos.
- `tema`: registra o tema visual selecionado.
- `tamanhoFonte`: armazena a preferência de tamanho da fonte.
- `espacamentoCards`: registra o espaçamento selecionado.
- `altoContraste`: armazena a preferência de contraste.

**sessionStorage — 5 chaves**
- `ultimaSecao`: registra a última seção acessada pelo menu.
- `pesquisaVereador`: armazena a pesquisa de vereadores.
- `pesquisaProjeto`: armazena a pesquisa de projetos.
- `filtroSituacao`: registra o filtro de situação selecionado.
- `ordemProjetos`: registra a ordenação utilizada.

**Cookies — 5 registros**
- `consentimentoCookies`: registra a decisão sobre cookies opcionais.
- `exibirBanner`: controla a exibição do banner principal.
- `exibirDatas`: controla a exibição das datas.
- `exibirContador`: controla a exibição do contador de projetos.
- `exibirDicas`: controla a exibição das dicas de navegação.

Os cookies opcionais são armazenados mediante consentimento do visitante.

### Melhorias na estrutura do projeto

- Implementação de novos arquivos JavaScript organizados por funcionalidade.
- Separação entre gerenciamento de projetos, favoritos, tema, sessão e preferências.
- Ampliação das regras CSS para suportar diferentes configurações visuais.
- Implementação de novos componentes interativos na interface.
- Ajustes de alinhamento, espaçamento e responsividade dos componentes.
- Manutenção da estrutura semântica HTML5 e dos recursos de acessibilidade.

### Testes e validações

- Validação da pesquisa dinâmica de vereadores.
- Testes de pesquisa, filtragem e ordenação dos projetos de lei.
- Verificação da inclusão e remoção de projetos favoritos.
- Testes de alternância e persistência do tema visual.
- Validação das configurações de fonte, espaçamento e contraste.
- Testes de consentimento e armazenamento de cookies.
- Verificação dos registros armazenados no `localStorage`, `sessionStorage` e nos cookies por meio das ferramentas de desenvolvedor do navegador.

### Documentação

- Elaboração do relatório técnico no modelo da Sociedade Brasileira de Computação (SBC).
- Descrição da arquitetura e das funcionalidades implementadas.
- Documentação das principais funções, arrays, objetos, eventos e operações de manipulação do DOM.
- Descrição dos mecanismos de armazenamento utilizados.
- Registro da utilização de inteligência artificial como ferramenta de apoio ao desenvolvimento.

---

## [16/10/2026] — Primeira Entrega Parcial

### Funcionalidades adicionadas

**1. Pesquisa dinâmica de vereadores**
- Implementação de campo de pesquisa para filtrar vereadores pelo nome.
- Atualização automática dos cards conforme o usuário digita.
- Utilização de JavaScript para manipulação do DOM e tratamento de eventos.

**2. Sistema de favoritos para projetos de lei**
- Implementação de botões para favoritar e desfavoritar projetos.
- Criação da seção "Meus Projetos Favoritos".
- Exibição dinâmica dos projetos selecionados.
- Possibilidade de remover projetos diretamente da lista de favoritos.
- Persistência dos favoritos utilizando `localStorage`.

### Melhorias na estrutura do projeto

- Separação das funcionalidades JavaScript nos arquivos `js/vereadores.js` e `js/favoritos.js`.
- Organização e ajustes na estrutura HTML.
- Adição de estilos CSS para os novos componentes.
- Atualização do menu de navegação para incluir a seção de favoritos.
- Remoção do ícone decorativo do cabeçalho.

### Tecnologias e conceitos utilizados

- HTML5 e CSS3.
- JavaScript.
- Manipulação do DOM.
- Eventos `input` e `click`.
- Funções, arrays e objetos.
- Armazenamento de dados com `localStorage`.