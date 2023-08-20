# Books Server with Firebase 📚🔥

## Resumo

Este projeto consiste em um servidor construído com NodeJS que nos permite adicionar, atualizar, listar e excluir livros de um banco de dados utilizando o Firebase.

## Objetivo

O objetivo deste projeto era desenvolver um servidor utilizando o banco de dados MariaDB ou o banco de dados Firebase como um trabalho da faculdade. O MariaDB havia sido apresentado em aula, portanto, optou-se por utilizar o Firebase para trazer um certo desafio adicional. A escolha do NodeJS como linguagem de desenvolvimento foi feita devido à maior familiaridade com essa tecnologia.

## Ferramentas/Tecnologias Utilizadas 🛠️

- NodeJS
- Firestore Database (Firebase)

## Pré-requisitos

- NodeJS instalado
- Conta no [Console do Firebase](https://console.firebase.google.com/)
- Chave privada de serviço do Firebase (arquivo JSON)

## Como Usar 🚀

1. Clone este repositório para o seu ambiente local.
2. Execute `npm install` para instalar as dependências.
3. Acesse o [Console do Firebase](https://console.firebase.google.com/) e crie um novo projeto.
4. Na seção "Configuração do SDK", clique em "Adicionar app" e selecione "Web". Isso é necessário apenas para projetos web, e não é essencial para este servidor NodeJS.
5. No Console do Firebase, vá para "Configurações do Projeto" > "Contas de Serviço".
6. Gere uma nova chave privada e baixe o arquivo JSON.
7. Crie uma variável de ambiente chamada `FIREBASE_PRIVATE_KEY` e defina o caminho para o conteúdo do arquivo JSON.
8. Crie uma variável de ambiente chamada `DATABASE_URL` e defina o url do banco de dados
9. Crie um variavel ambiente chamada `PORT`, `HOST`, e `HOST_URL` e defina os valores. 
10. Execute `npm start` para iniciar o servidor.

## Funcionalidades ✨

- Adicionar livros ao banco de dados
- Listar livros armazenados
- Atualizar informações de livros existentes
- Excluir livros do banco de dados

### Rotas

- **GET /listbooks**: Retorna a lista de todos os livros armazenados.
- **GET /getBookById/:id**: Retorna as informações de um livro específico com base no ID.
- **POST /addBook**: Adiciona um novo livro ao banco de dados.
- **PUT /updateBook/:id**: Atualiza as informações de um livro existente com base no ID.
- **DELETE /deleteBook/:id**: Exclui um livro do banco de dados com base no ID.

Utilize um software de testes de API, como o Insomnia, para testar essas rotas e interagir com o servidor.

## Utilizando o Insomnia para Testar as Rotas 🛠️

- Instale e abra o [Insomnia](https://insomnia.rest/).
- Crie um novo ambiente ou cole as variáveis de ambiente relevantes (URL do servidor, etc.).
- Crie uma nova requisição para cada uma das rotas (adicionar, listar, atualizar, excluir) e configure os métodos HTTP adequados.
- Adicione os parâmetros necessários nas requisições e faça os testes.
    
## AUTORA 👧🏻 

Feito com 🧡 por Priscila Zeferino.

## ✉ Contato:

- Linkedin: [Priscila Zeferino](https://www.linkedin.com/in/priscila-zeferino-594b5b175/)
- E-mail: priscila.zeferino23@gmail.com
