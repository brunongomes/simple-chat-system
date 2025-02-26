const express = require('express');
const app = express();
const mongoose = require('mongoose');
const http = require('http').createServer(app);
require('dotenv').config()
const io = require('socket.io')(http, {
  cors: {
    origin: "*", // Permite qualquer origem (para desenvolvimento)
    methods: ["GET", "POST"] // Permite os métodos GET e POST
  }
});

// Configuração do MongoDB
mongoose.connect(`${process.env.MONGO_URI}?authSource=admin&dbName=chat-system`);

// Schema do Message
const messageSchema = new mongoose.Schema({
  user: String,
  text: String,
  timestamp: Date
});

const Message = mongoose.model('Message', messageSchema);

// Middleware
app.use(express.json());

// Rota para teste
app.get('/', (req, res) => {
  res.send('Chat API');
});

// Socket.IO
io.on('connection', (socket) => {
  console.log('📡 Novo cliente conectado:', socket.id);

  socket.on('chat message', async (data) => {
    try {
      const message = new Message({
        user: data.userId,
        text: data.message
      });
      await message.save();
      
      io.emit('chat message', {
        ...message.toObject(),
        user: data.userId
      });
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
    }
  });

  socket.on('disconnect', () => {
    console.log('🛑 Cliente desconectado:', socket.id);
  });
});

// Iniciar o servidor
const PORT = process.env.PORT || 3001;
http.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
