<template>
    <div class="min-h-screen bg-[#131619] flex flex-col items-center justify-center font-jakarta">
        <header class="w-full px-6 py-4 flex flex-wrap justify-between items-center">
            <div class="flex items-center gap-3 m-6">
                <img src="../public/img/logo.svg" alt="Logo Linksy" class="h-8">
                <h1 class="text-white text-2xl md:text-3xl font-bold">Linksy</h1>
            </div>
            
            <nav class="w-full sm:w-auto">
                <ul class="flex flex-wrap justify-center sm:justify-end gap-6">
                    <li><a href="/sobre" class="text-[#9B9C9E] hover:text-white transition duration-200">Sobre</a></li>
                    <li><a href="/ajuda" class="text-[#9B9C9E] hover:text-white transition duration-200">Ajuda</a></li>
                    <li><a href="/login" class="text-[#B6F09C] hover:underline">Login</a></li>
                </ul>
            </nav>
        </header>
        <main class="text-center flex-1 flex flex-col items-center justify-center px-6">
            <h2 class="text-white text-3xl md:text-6xl font-extrabold mb-6 leading-tight">
                Conecte-se com <span
                    class="bg-clip-text bg-gradient-to-tr from-[#4D62E5] via-[#87DDEE] to-[#B6F09C] text-transparent">profissionais</span>
            </h2>
            <p class="text-[#9B9C9E] text-base md:text-lg mb-12 max-w-lg">
                Transforme conexões em oportunidades. A Linksy é a forma moderna e dinâmica de expandir sua rede
                profissional.
            </p>
            <div class="flex flex-wrap gap-6 justify-center">
                <button
                    class="bg-gradient-to-tr from-[#4D62E5] via-[#87DDEE] to-[#B6F09C] text-[#0C1132] px-6 py-3 rounded-lg font-semibold text-base md:text-lg shadow-lg hover:scale-105 transition transform duration-200">
                    <a href="/cadastro">Comece Agora</a>
                </button>
            </div>
        </main>
        <section class="w-full py-16 bg-[#1A1D21] px-6">
            <div class="max-w-screen-lg mx-auto text-center">
                <h3 class="text-white text-2xl md:text-3xl font-bold mb-8">Por que usar Linksy?</h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <div class="bg-[#131619] p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-200">
                        <h4 class="text-[#B6F09C] text-lg font-semibold mb-4">Networking Inteligente</h4>
                        <p class="text-[#9B9C9E]">
                            Conecte-se com profissionais alinhados aos seus interesses e objetivos de carreira.
                        </p>
                    </div>
                    <div class="bg-[#131619] p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-200">
                        <h4 class="text-[#B6F09C] text-lg font-semibold mb-4">Facilidade de Uso</h4>
                        <p class="text-[#9B9C9E]">
                            Explore perfis, envie mensagens e crie conexões com uma interface simples e intuitiva.
                        </p>
                    </div>
                    <div class="bg-[#131619] p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-200">
                        <h4 class="text-[#B6F09C] text-lg font-semibold mb-4">Oportunidades Reais</h4>
                        <p class="text-[#9B9C9E]">
                            Transforme interações em parcerias, colaborações ou o próximo passo da sua carreira.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <footer class="w-full py-6 text-center text-sm border-t border-[#363A3D]">
            <p class="text-[#9B9C9E]">&copy; 2024 Linksy. Todos os direitos reservados.</p>
        </footer>
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');

.font-jakarta {
    font-family: 'Plus Jakarta Sans', sans-serif;
}
</style>
