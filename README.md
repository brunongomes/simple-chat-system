Claro! Aqui está um exemplo de README básico e direto para o seu projeto de chat:

---

# Chat Simples com Socket.io e MongoDB

Este é um projeto simples de chat em tempo real utilizando **Socket.io** para comunicação em tempo real e **MongoDB** para armazenar as mensagens enviadas. O sistema possui dois chats independentes, cada um com um campo de mensagem e um botão para enviar.

## Estrutura do Projeto

O projeto contém os seguintes arquivos principais:

- **index.html**: A interface do usuário com dois chats.
- **script.js**: A lógica para gerenciar o envio e recebimento de mensagens via Socket.io.
- **server.js**: O servidor Node.js que gerencia a conexão com o Socket.io, o MongoDB e as mensagens.
- **styles.css**: O estilo básico para a interface do chat.

## Como Executar

### 1. Instalar Dependências

Certifique-se de ter o **Node.js** e **MongoDB** instalados. Então, instale as dependências necessárias:

```bash
npm install
```

### 2. Configurar o MongoDB

Modifique o arquivo `.env.example` na raiz do projeto para `.env` e configure as variáveis `MONGO_URI` e `PORT`

Altere a porta no arquivo `index.html`

### 3. Iniciar o Servidor

Execute o servidor com o comando:

```bash
npm start
```

Isso iniciará o servidor na porta **3008** (ou outra porta configurada no arquivo `.env`).

### 4. Acessar o Chat

Abra o arquivo **index.html** em seu navegador para interagir com o chat. Os chats são independentes, com entradas separadas para cada um.

## Funcionalidades

- Enviar mensagens em dois chats simultaneamente.
- As mensagens são armazenadas no MongoDB.
- As mensagens enviadas são exibidas em tempo real para todos os usuários conectados.

## Tecnologias Usadas

- **Node.js**: Ambiente de execução para o servidor.
- **Socket.io**: Comunicação em tempo real entre o servidor e o cliente.
- **MongoDB**: Banco de dados NoSQL para armazenar as mensagens.
- **Express**: Framework para facilitar a criação do servidor Node.js.
