# Projeto GitHub - Workshop COTI Informática

Este repositório contém um projeto simples em HTML, CSS e JavaScript desenvolvido durante o workshop de GitHub realizado pela COTI Informática. O objetivo do projeto foi praticar controle de versão, fluxo de trabalho no GitHub e a criação de uma pequena aplicação estática.

## Tecnologias usadas

- HTML5
- CSS3
- JavaScript (ES6+)

Nenhuma dependência de servidor é necessária — o projeto é estático e pode ser executado localmente em qualquer navegador moderno.

## Estrutura do repositório

- `index.html` — página principal
- `css/` — arquivos de estilo (CSS)
- `js/` — scripts JavaScript
- `assets/` — imagens, fontes e outros recursos (se houver)

> Observação: os nomes das pastas podem variar conforme as decisões tomadas durante o workshop.

## Como abrir e usar o projeto no Visual Studio Code

Pré-requisitos:
- Git (opcional, para clonar o repositório)
- Visual Studio Code instalado
- Recomenda-se a extensão "Live Server" (Ritwick Dey) para visualizar atualizações em tempo real

Passos:

1. Clone o repositório (ou baixe como ZIP):

   git clone https://github.com/edgardpimentaa/projeto-github.git

2. Abra a pasta do projeto no Visual Studio Code:

   - Na linha de comando: `cd projeto-github` e depois `code .` (se o comando `code` estiver disponível)
   - Ou abra o VS Code e escolha "File > Open Folder..." e selecione a pasta do projeto.

3. Instale/ative a extensão Live Server (opcional, mas recomendado):

   - Vá em Extensões (ícone de quadrado no lado esquerdo), busque por "Live Server" e clique em instalar.

4. Abra `index.html` e clique em "Go Live" (botão no canto inferior direito) para iniciar um servidor local. O navegador abrirá automaticamente mostrando a página.

Alternativa sem extensão:

- Abra o arquivo `index.html` diretamente no navegador (duplo clique). Algumas funcionalidades que dependam de requisições HTTP podem não funcionar corretamente ao abrir pelo protocolo `file://`.
- Ou execute um servidor simples usando Python (se tiver Python instalado):

  - Para Python 3:

    python -m http.server 5500

  - Depois abra http://localhost:5500 no seu navegador.

## Dicas de desenvolvimento

- Faça alterações nos arquivos dentro de `css/` e `js/` e salve; se estiver usando Live Server, a página será recarregada automaticamente.
- Use o console do navegador (F12) para depurar JavaScript.

## Contribuições

Este repositório foi criado durante um workshop. Se quiser contribuir com melhorias ou correções, sinta-se à vontade para abrir um pull request.

## Contato

Desenvolvido durante o workshop da COTI Informática.

---

Feito com ❤️ durante o workshop.
