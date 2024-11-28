<template>
    <aside class=" w-1/6 rounded-3xl font-jakarta flex flex-col min-h-screen">
        <div class="p-4 flex flex-col flex-grow">
            <div class="flex items-center justify-between bg-[#0D0F10] mb-0.5 rounded-t-2xl py-6 px-4">
                <div class="flex items-center gap-3">
                    <img src="../public/img/avatar-pessoal.svg" alt="">
                    <p class="text-white font-semibold text-lg">Manook</p>
                </div>
                <a href="#"><img src="../public/img/configuracao.svg" alt="Configuração"></a>
            </div>
            <div class="bg-[#0D0F10] mb-0.5 p-6">
                <h4 class="text-[#686B6E] text-sm mb-4">Geral</h4>
                <ul class="flex flex-col gap-5">
                    <a class="flex gap-4 w-1/3" href="#">
                        <img src="../public/img/buscar.svg" alt="Lupa">
                        <li class="text-[#E8E9E9] text-base">Buscar</li>
                    </a>
                    <a class="flex gap-3 w-2/5" href="/conversas">
                        <img src="../public/img/conversa.svg" alt="Balão de conversa">
                        <li class="text-[#E8E9E9] text-base">Conversas</li>
                    </a>
                </ul>
            </div>
            <div class="bg-[#0D0F10] rounded-b-2xl p-6 flex-grow">
                <h4 class="text-[#686B6E] text-sm mb-4">Conversas</h4>
                <div class="flex flex-col">
                    <a class="flex items-center gap-3" href="#">
                        <img src="../public/img/avatar-conversa.svg" alt="">
                        <p class="text-[#E8E9E9]">André</p>
                    </a>
                </div>
            </div>
        </div>
    </aside>
</template>
<style setup>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');

.font-jakarta {
    font-family: 'Plus Jakarta Sans', sans-serif;
}
</style>