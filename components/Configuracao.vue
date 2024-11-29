<template>
    <section class="bg-[#131619] min-h-screen font-jakarta flex flex-col items-center">
        <div class="flex flex-col pt-6 border-b w-11/12">
            <h1 class="font-bold text-white text-3xl mb-2">Configurações</h1>
            <h3 class="text-[#B2B2B2] text-base mb-3">Gerencie as configurações da sua conta</h3>
        </div>
        <div class="flex flex-col w-1/3">
            <div class="flex flex-col pt-6 border-b w-11/12">
                <h2 class="font-bold text-white text-2xl my-2">Perfil</h2>
                <p class="text-[#C9C9C9] text-sm mb-3">É assim que os outros verão você no site.</p>
            </div>
            <div class="flex flex-col my-4">
                <label for="nome" class="text-white text-base font-semibold mb-2">Nome de usuário</label>
                <input type="text" name="nome" id="nome" placeholder="Lucas Silva" class="border-[#D9D9D9] border bg-transparent p-2 rounded-md text-[#C9C9C9]">
            </div>
            <div class="flex flex-col my-4">
                <label for="data" class="text-white text-base font-semibold mb-2">Data de aniversário</label>
                <input type="date" name="data" id="data" class="border-[#D9D9D9] border bg-transparent p-2 rounded-md text-[#C9C9C9]">
            </div>
            <div class="flex flex-col my-4">
                <p class="text-white text-base font-semibold">Localização</p>
                <label for="local" class="text-xs mt-2 mb-4 text-[#C9C9C9]">Coloque a cidade onde você mora</label>
                <input type="text" name="local" id="local" placeholder="São Paulo" class="border-[#D9D9D9] border bg-transparent p-2 rounded-md text-[#C9C9C9]">
            </div>
            <div class="flex flex-col my-4">
                <p class="text-white text-base font-semibold">Biografia</p>
                <label for="bio" class="text-xs mt-2 mb-4 text-[#C9C9C9]">Faça uma breve descrição sobre você, quais cursos já fez, o que sabe, quais são suas experiências</label>
                <textarea name="bio" id="bio" cols="40" rows="5" class="border-[#D9D9D9] border bg-transparent p-2 rounded-md text-[#C9C9C9]"></textarea>
            </div>
            <div class="flex flex-col my-4">
                <p class="text-white text-base font-semibold">URLs</p>
                <label for="link" class="text-xs mt-2 mb-4 text-[#C9C9C9]">Adicione links como github, linkedin</label>
                <input type="url" name="link" id="link" class="border-[#D9D9D9] border bg-transparent p-2 rounded-md text-[#C9C9C9]"></input>
                <div class="mt-3">
                    <button class="text-white bg-transparent border border-[#D9D9D9] p-2 rounded-md hover:bg-[#cccccc1f] duration-100	transition-all">Adicionar URL</button>
                </div>
            </div>
            <div class="mb-5 mt-8">
                <button class="text-black bg-[#D9D9D9] p-4 font-semibold rounded-lg hover:bg-[#919191] duration-200 transition-all">Atualizar Perfil</button>
            </div>
        </div>
    </section>
</template>
<style setup>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');

.font-jakarta {
    font-family: 'Plus Jakarta Sans', sans-serif;
}
</style>