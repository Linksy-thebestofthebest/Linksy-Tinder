<template>
    <div class="min-h-screen bg-[#131619] flex flex-col items-center justify-center font-jakarta">
        <header class="w-full px-6 py-4 flex justify-between items-center">
            <h1 class="text-white text-3xl font-bold">Linksy</h1>
            <nav>
                <ul class="flex gap-6">
                    <li><a href="#" class="text-[#9B9C9E] hover:text-white transition duration-200">Sobre</a></li>
                    <li><a href="#" class="text-[#9B9C9E] hover:text-white transition duration-200">Ajuda</a></li>
                    <li><a href="/login" class="text-[#B6F09C] hover:underline">Login</a></li>
                </ul>
            </nav>
        </header>
        <main class="text-center flex-1 flex flex-col items-center justify-center">
            <h2 class="text-white text-4xl md:text-6xl font-extrabold mb-6">
                Conecte-se com <span
                    class="bg-clip-text bg-gradient-to-tr from-[#4D62E5] via-[#87DDEE] to-[#B6F09C] text-transparent">profissionais</span>
            </h2>
            <p class="text-[#9B9C9E] text-lg md:text-xl mb-12 max-w-lg">
                Transforme conexões em oportunidades. A Linksy é a forma moderna e dinâmica de expandir sua rede
                profissional.
            </p>
            <div class="flex gap-6">
                <button
                    class="bg-gradient-to-tr from-[#4D62E5] via-[#87DDEE] to-[#B6F09C] text-[#0C1132] px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:scale-105 transition transform duration-200">
                    <a href="/cadastro">Comece Agora</a>
                </button>
            </div>
        </main>
        
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');

.font-jakarta {
    font-family: 'Plus Jakarta Sans', sans-serif;
}
</style>