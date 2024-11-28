<template>
    <div class="flex h-screen">
        <Aside />

        <div class="flex flex-col flex-grow bg-[#0D0F10] text-white rounded-lg overflow-hidden">

            <div class="flex items-center justify-between p-4 bg-[#0D0F10]">
                <h2 class="text-lg font-bold">André</h2>
                <span class="text-sm text-green-400">Online</span>
            </div>

            <div class="flex-1 overflow-y-auto p-4 space-y-4" id="chat-container">

                <div class="self-start bg-gray-700 text-white max-w-[70%] p-3 rounded-lg">
                    <p class="text-sm">Olá, gostei do seu perfil, gostaria de fazer umas perguntas.</p>
                    <span class="block mt-1 text-xs text-gray-300">13sec atrás</span>
                </div>


                <div class="self-end bg-gray-400 text-white max-w-[70%] p-3 rounded-lg">
                    <p class="text-sm">Oi, estou bem sim e você? Eu super toparia conversar mais sobre o estágio.</p>
                    <span class="block mt-1 text-xs text-gray-300">11sec atrás</span>
                </div>


                <div class="self-start bg-gray-700 text-white max-w-[70%] p-3 rounded-lg">
                    <p class="text-sm">Podemos marcar uma reunião no zoom?</p>
                    <span class="block mt-1 text-xs text-gray-300">4sec atrás</span>
                </div>


                <div class="self-end bg-gray-400 text-white max-w-[70%] p-3 rounded-lg">
                    <p class="text-sm">Claro, qual horário e dia seria?</p>
                    <span class="block mt-1 text-xs text-gray-300">agora</span>
                </div>


                <div class="self-start bg-gray-700 text-white max-w-[70%] p-3 rounded-lg">
                    <p class="text-sm">Que tal amanhã às 14h? Podemos conversar sobre os detalhes.</p>
                    <span class="block mt-1 text-xs text-gray-300">2sec atrás</span>
                </div>


                <div class="self-end bg-gray-400 text-white max-w-[70%] p-3 rounded-lg">
                    <p class="text-sm">Amanhã às 14h está perfeito! Vou aguardar o link da reunião.</p>
                    <span class="block mt-1 text-xs text-gray-300">1sec atrás</span>
                </div>


                <div class="self-start bg-gray-700 text-white max-w-[70%] p-3 rounded-lg">
                    <p class="text-sm">Perfeito! Vou enviar o link ainda hoje. Até lá!</p>
                    <span class="block mt-1 text-xs text-gray-300">agora</span>
                </div>


                <div class="self-start bg-gray-700 text-white max-w-[70%] p-3 rounded-lg">
                    <p class="text-sm">Ah, por favor, confirme seu e-mail para que eu envie os documentos também.</p>
                    <span class="block mt-1 text-xs text-gray-300">5sec atrás</span>
                </div>


                <div class="self-end bg-gray-400 text-white max-w-[70%] p-3 rounded-lg">
                    <p class="text-sm">Sim, claro. Meu e-mail é andre@exemplo.com.</p>
                    <span class="block mt-1 text-xs text-gray-300">2sec atrás</span>
                </div>


                <div class="self-start bg-gray-700 text-white max-w-[70%] p-3 rounded-lg">
                    <p class="text-sm">Ótimo, já vou organizar tudo por aqui. Obrigado!</p>
                    <span class="block mt-1 text-xs text-gray-300">agora</span>
                </div>


                <div class="self-end bg-gray-400 text-white max-w-[70%] p-3 rounded-lg">
                    <p class="text-sm">Sem problemas! Estarei no aguardo.</p>
                    <span class="block mt-1 text-xs text-gray-300">2sec atrás</span>
                </div>
            </div>



            <div class="flex items-center p-4 bg-[#0D0F10]">
                <input type="text" placeholder="Type a message..."
                    class="flex-1 px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-white" />
                <button class="ml-3 px-4 py-2 bg-[#171b1d] rounded-lg hover:bg-gray-700 transition">
                    <i class="text-white">➤</i>
                </button>
            </div>

        </div>

        <div class="w-1/4 bg-[#0D0F10] p-4 flex flex-col items-center text-white">
            <img src="../public/img/eu-2.jfif" alt="Avatar" class="" />
            <h2 class="text-lg font-bold">André</h2>
            <p class="text-sm text-gray-400">São Paulo, SP</p>
            <div class="mt-4 space-y-2 text-sm">
                <p><strong>Instituição:</strong> FIAP</p>
                <p><strong>Curso:</strong> Análise e Desenvolvimento de Sistemas</p>
                <p><strong>Certificações:</strong> Front-end FIAP, Banco de Dados FIAP, JavaScript Alura, React
                    (formação completa Alura)</p>
                <p><strong>Conhecimento:</strong> Front e Back, React, MongoDB, Vue, Nuxt, JavaScript, Python, Java,
                    SQL, MySQL, Next, HTML, CSS, Tailwind</p>
            </div>
        </div>

    </div>
</template>