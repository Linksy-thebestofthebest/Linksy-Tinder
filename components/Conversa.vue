<template>
    <div class="flex h-screen">
        <Aside />

        <section class="flex flex-col flex-grow text-white rounded-lg overflow-hidden font-jakarta">
            <div class="flex items-center justify-between p-4">
                <h2 class="text-lg font-bold">André</h2>
                <span class="text-sm text-green-400">Online</span>
            </div>

            <div class="flex flex-col overflow-y-auto p-4 space-y-4 w-full" id="chat-container">
                <div class="flex flex-col self-start bg-gray-700 text-white max-w-[70%] p-3 rounded-lg">
                    <p class="text-sm">Olá, gostei do seu perfil, gostaria de fazer umas perguntas.</p>
                    <span class="block mt-1 text-xs text-gray-300">13sec atrás</span>
                </div>


                <div class="flex flex-col self-end bg-gray-400 text-white max-w-[70%] p-3 rounded-lg">
                    <p class="text-sm">Oi, estou bem sim e você? Eu super toparia conversar mais sobre o estágio.</p>
                    <span class="block mt-1 text-xs text-gray-300">11sec atrás</span>
                </div>


                <div class="flex flex-col self-start bg-gray-700 text-white max-w-[70%] p-3 rounded-lg">
                    <p class="text-sm">Podemos marcar uma reunião no zoom?</p>
                    <span class="block mt-1 text-xs text-gray-300">4sec atrás</span>
                </div>


                <div class="flex flex-col self-end bg-gray-400 text-white max-w-[70%] p-3 rounded-lg">
                    <p class="text-sm">Claro, qual horário e dia seria?</p>
                    <span class="block mt-1 text-xs text-gray-300">agora</span>
                </div>


                <div class="flex flex-col self-start bg-gray-700 text-white max-w-[70%] p-3 rounded-lg">
                    <p class="text-sm">Que tal amanhã às 14h? Podemos conversar sobre os detalhes.</p>
                    <span class="block mt-1 text-xs text-gray-300">2sec atrás</span>
                </div>


                <div class="flex flex-col self-end bg-gray-400 text-white max-w-[70%] p-3 rounded-lg">
                    <p class="text-sm">Amanhã às 14h está perfeito! Vou aguardar o link da reunião.</p>
                    <span class="block mt-1 text-xs text-gray-300">1sec atrás</span>
                </div>


                <div class="flex flex-col self-start bg-gray-700 text-white max-w-[70%] p-3 rounded-lg">
                    <p class="text-sm">Perfeito! Vou enviar o link ainda hoje. Até lá!</p>
                    <span class="block mt-1 text-xs text-gray-300">agora</span>
                </div>


                <div class="flex flex-col self-start bg-gray-700 text-white max-w-[70%] p-3 rounded-lg">
                    <p class="text-sm">Ah, por favor, confirme seu e-mail para que eu envie os documentos também.</p>
                    <span class="block mt-1 text-xs text-gray-300">5sec atrás</span>
                </div>


                <div class="flex flex-col self-end bg-gray-400 text-white max-w-[70%] p-3 rounded-lg">
                    <p class="text-sm">Sim, claro. Meu e-mail é andre@exemplo.com.</p>
                    <span class="block mt-1 text-xs text-gray-300">2sec atrás</span>
                </div>


                <div class="flex flex-col self-start bg-gray-700 text-white max-w-[70%] p-3 rounded-lg">
                    <p class="text-sm">Ótimo, já vou organizar tudo por aqui. Obrigado!</p>
                    <span class="block mt-1 text-xs text-gray-300">agora</span>
                </div>


                <div class="flex flex-col self-end bg-gray-400 text-white max-w-[70%] p-3 rounded-lg">
                    <p class="text-sm">Sem problemas! Estarei no aguardo.</p>
                    <span class="block mt-1 text-xs text-gray-300">2sec atrás</span>
                </div>
            </div>



            <div class="flex items-center p-4">
                <input type="text" placeholder="Escreva uma mensagem..." class="flex-1 px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-400" />
                <button class="ml-3 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-600 transition">
                    <i class="text-white">➤</i>
                </button>
            </div>

        </section>

        <Informacao />
    </div>
</template>
<style setup>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');

.font-jakarta {
    font-family: 'Plus Jakarta Sans', sans-serif;
}
</style>