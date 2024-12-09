<template>
    <section class="w-full lg:w-6/12 xl:w-4/12 p-6 flex flex-col items-center text-white font-jakarta lg:ml-24 xl:ml-96">
        <div class="flex flex-col items-center overflow-y-auto">
            <div class="flex">
                <img src="../public/img/flecha.svg" class="rotate-180 cursor-pointer hidden lg:block" alt="">
                <InformacoesImagemInformacao/>
                <img src="../public/img/flecha.svg" class="cursor-pointer hidden lg:block" alt="">
            </div>
            <div class="flex mt-4">
                <a href="#"><img src="../public/img/undo-button.svg" alt="Botão de voltar"></a>
                <a href="#"><img src="../public/img/dislike-button.svg" alt="Botão de dislike"></a>
                <a href="#"><img src="../public/img/like-button.svg" alt="Botão de like"></a>
            </div>
            <InformacoesBio/>
        </div>
    </section>
</template>
<style setup>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');

.font-jakarta {
    font-family: 'Plus Jakarta Sans', sans-serif;
}
</style>