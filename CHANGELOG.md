# Changelog — Câmara Municipal de Floresta do Piauí

Registro das alterações e funcionalidades desenvolvidas no Trabalho 02 da disciplina de Programação para Web I.

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

### Próximas etapas

**Funcionalidades e interatividade**
- Implementar pesquisa e filtros dinâmicos para os projetos de lei.
- Desenvolver funcionalidades de ordenação e categorização dos projetos.
- Adicionar visualização detalhada das informações dos vereadores e projetos de lei.
- Implementar preferências de visualização, como alternância entre tema claro e escuro.
- Melhorar a interatividade dos formulários com validações utilizando JavaScript.

**Armazenamento de dados**
- Expandir a utilização do `localStorage` para armazenar preferências e informações do usuário.
- Implementar o `sessionStorage` para armazenar informações temporárias durante a navegação.
- Utilizar cookies para armazenar configurações e preferências da página.
- Garantir a utilização dos três mecanismos de armazenamento conforme os requisitos do trabalho.

**Interface e organização**
- Aprimorar a responsividade e a acessibilidade da interface.
- Continuar a organização dos arquivos JavaScript por funcionalidades.
- Melhorar a experiência de navegação e o feedback visual das interações.

**Documentação e entrega**
- Atualizar o registro de alterações na segunda entrega parcial, em 23/10/2026.
- Documentar as funções, os objetos, os arrays e os demais componentes desenvolvidos.
- Elaborar o relatório técnico no modelo da Sociedade Brasileira de Computação (SBC).
- Realizar testes e preparar a entrega final para 28/10/2026.