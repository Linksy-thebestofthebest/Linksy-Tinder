<template>
    <section class="flex flex-col flex-grow text-white rounded-lg overflow-hidden font-jakarta">
        <!-- Cabeçalho do Chat -->
        <div class="flex items-center justify-between p-4 bg-gray-800">
            <h2 class="text-lg font-bold">{{ chatUser }}</h2>
            <span class="text-sm text-green-400">Online</span>
        </div>
    
        <!-- Container de Mensagens -->
        <div class="flex flex-col overflow-y-auto p-4 space-y-4 w-full bg-gray-900" id="chat-container">
            <div
            v-for="(msg, index) in messages"
            :key="index"
            :class="[
                'flex flex-col p-3 rounded-lg max-w-[70%]',
                msg.from === currentUser ? 'self-end bg-blue-500' : 'self-start bg-gray-700'
            ]"
            >
            <p class="text-sm">{{ msg.content }}</p>
            <span class="block mt-1 text-xs text-gray-300">{{ formatTimestamp(msg.timestamp) }}</span>
            </div>
        </div>
    
        <!-- Input de Mensagem -->
        <div class="flex items-center p-4 bg-gray-800">
            <input
            v-model="newMessage"
            type="text"
            placeholder="Escreva uma mensagem..."
            class="flex-1 px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-400"
            @keyup.enter="sendMessage"
            />
            <button
            @click="sendMessage"
            class="ml-3 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-400 transition"
            >
            <i class="text-white">➤</i>
            </button>
        </div>
        </section>
    </template>
    
    <script>
    import { io } from "socket.io-client";
    
    export default {
        data() {
        return {
            socket: null, // Instância do WebSocket
            messages: [], // Lista de mensagens
            newMessage: "", // Nova mensagem a ser enviada
            currentUser: "andre", // Usuário atual
            chatUser: "empresa", // Usuário do chat (destinatário)
        };
        },
        mounted() {
        // Conecta ao servidor WebSocket
        this.socket = io("http://localhost:3000");
    
        // Carrega mensagens do banco (simulado aqui)
        this.loadMessages();
    
        // Escuta mensagens recebidas
        this.socket.on("receiveMessage", (message) => {
            this.messages.push(message);
            this.scrollToBottom();
        });
        },
        methods: {
        loadMessages() {
            // Simulação de carregamento de mensagens (use API real no futuro)
            this.messages = [
            { from: "andre", to: "empresa", content: "Olá, gostei do seu perfil!", timestamp: new Date() },
            { from: "empresa", to: "andre", content: "Oi! Tudo bem?", timestamp: new Date() },
            ];
            this.scrollToBottom();
        },
        sendMessage() {
            if (!this.newMessage.trim()) return;
    
            const message = {
            from: this.currentUser,
            to: this.chatUser,
            content: this.newMessage,
            timestamp: new Date(),
            };
    
            // Envia a mensagem para o servidor WebSocket
            this.socket.emit("sendMessage", message);
    
            // Adiciona a mensagem localmente
            this.messages.push(message);
            this.newMessage = "";
            this.scrollToBottom();
        },
        scrollToBottom() {
            const container = document.getElementById("chat-container");
            if (container) container.scrollTop = container.scrollHeight;
        },
        formatTimestamp(timestamp) {
            const date = new Date(timestamp);
            return `${date.getHours()}:${date.getMinutes()}`;
        },
        },
    };
    </script>
    
    <style setup>
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');
    
    .font-jakarta {
        font-family: 'Plus Jakarta Sans', sans-serif;
    }
</style>