# Portfólio de Nathanael Farias

Este é o meu portfólio pessoal, desenvolvido com **Angular**, **TypeScript** e **CSS**. Ele foi criado para destacar minhas habilidades, experiências, certificações e projetos de forma interativa e modular. O objetivo é apresentar uma visão clara do meu trabalho e das tecnologias que utilizo.

## Tecnologias Utilizadas

- **Angular**: Framework para construção de interfaces dinâmicas e escaláveis.
- **TypeScript**: Linguagem de programação para desenvolvimento de componentes e estruturação da aplicação.
- **CSS**: Para a estilização e design responsivo da interface.
- **HTML**: Para a estruturação do conteúdo das páginas.

## Estrutura do Projeto

Abaixo está a árvore de arquivos do projeto:

```plaintext
portfolio/                                      # Diretório principal do projeto.
├── src/                                         # Diretório principal do código-fonte da aplicação.
│   ├── Css/                                     # Estilos CSS da aplicação.
│   │   └── styles.css                           # Arquivo de estilo principal para o projeto.
│   ├── Html/                                    # Arquivos HTML da aplicação.
│   │   └── index.html                           # Arquivo principal de estrutura HTML.
│   ├── app/                                     # Diretório com os componentes da aplicação.
│   │   ├── app/                                 # Componente raiz da aplicação.
│   │   │   ├── app.component.css                # Estilos específicos do componente raiz.
│   │   │   ├── app.component.html               # Estrutura HTML do componente raiz.
│   │   │   ├── app.component.ts                 # Lógica do componente raiz.
│   │   │   └── app.module.ts                    # Módulo principal da aplicação.
│   │   ├── background/                          # Componente de fundo da página.
│   │   │   ├── background.component.css         # Estilos para o fundo.
│   │   │   ├── background.component.html        # Estrutura HTML do fundo.
│   │   │   └── background.component.ts          # Lógica do componente de fundo.
│   │   ├── certificate-card/                    # Componente de exibição de certificações.
│   │   │   ├── certificate-card.component.css   # Estilos do card de certificação.
│   │   │   ├── certificate-card.component.html  # HTML do card de certificação.
│   │   │   └── certificate-card.component.ts    # Lógica do card de certificação.
│   │   ├── footer/                              # Componente de rodapé da página.
│   │   │   ├── footer.component.css             # Estilos do rodapé.
│   │   │   ├── footer.component.html            # HTML do rodapé.
│   │   │   └── footer.component.ts              # Lógica do rodapé.
│   │   ├── hamburger-menu/                      # Componente de menu "hamburger".
│   │   │   ├── hamburger-menu.component.css     # Estilos do menu.
│   │   │   ├── hamburger-menu.component.html    # HTML do menu.
│   │   │   └── hamburger-menu.component.ts      # Lógica do menu.
│   │   ├── modal-certificate/                   # Componente de modal para certificações.
│   │   │   ├── modal-certificate.component.css  # Estilos do modal de certificação.
│   │   │   ├── modal-certificate.component.html # HTML do modal de certificação.
│   │   │   └── modal-certificate.component.ts   # Lógica do modal de certificação.
│   │   ├── modal-projects/                      # Componente de modal para projetos.
│   │   │   ├── modal-projects.component.css     # Estilos do modal de projetos.
│   │   │   ├── modal-projects.component.html    # HTML do modal de projetos.
│   │   │   └── modal-projects.component.ts      # Lógica do modal de projetos.
│   │   ├── project-card/                        # Componente de card de projeto.
│   │   │   ├── project-card.component.css       # Estilos do card de projeto.
│   │   │   ├── project-card.component.html      # HTML do card de projeto.
│   │   │   └── project-card.component.ts        # Lógica do card de projeto.
│   │   ├── projects-resume/                     # Componente de resumo de projetos.
│   │   │   ├── projects-resume.component.css    # Estilos do resumo de projetos.
│   │   │   ├── projects-resume.component.html   # HTML do resumo de projetos.
│   │   │   └── projects-resume.component.ts     # Lógica do resumo de projetos.
│   │   ├── resume/                              # Componente de exibição de currículo.
│   │   │   ├── resume.component.css             # Estilos do currículo.
│   │   │   ├── resume.component.html            # HTML do currículo.
│   │   │   └── resume.component.ts              # Lógica do currículo.
│   │   ├── skills/                              # Componente de habilidades.
│   │   │   ├── skills.component.css             # Estilos das habilidades.
│   │   │   ├── skills.component.html            # HTML das habilidades.
│   │   │   └── skills.component.ts              # Lógica das habilidades.
│   │   ├── studies/                             # Componente de estudos.
│   │   │   ├── studies.component.css            # Estilos dos estudos.
│   │   │   ├── studies.component.html           # HTML dos estudos.
│   │   │   └── studies.component.ts             # Lógica dos estudos.
│   └── main.ts                                  # Arquivo principal que inicia a aplicação Angular.

