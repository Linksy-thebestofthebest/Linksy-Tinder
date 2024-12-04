import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import mongoose from 'mongoose';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Conexão ao banco de dados
mongoose.connect('mongodb://localhost:27017/Linksy', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Esquema de mensagem
const messageSchema = new mongoose.Schema({
  from: String,
  to: String,
  content: String,
  timestamp: { type: Date, default: Date.now },
});

const Message = mongoose.model('Message', messageSchema);

// Gerenciar conexões WebSocket
io.on('connection', (socket) => {
  console.log('Um usuário conectou');

  // Receber mensagens
  socket.on('sendMessage', async (data) => {
    const { from, to, content } = data;

    // Salvar mensagem no banco
    const message = new Message({ from, to, content });
    await message.save();

    // Enviar mensagem para o destinatário
    io.emit('receiveMessage', message);
  });

  socket.on('disconnect', () => {
    console.log('Usuário desconectado');
  });
});

// Iniciar servidor
server.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
