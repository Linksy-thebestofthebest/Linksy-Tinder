<template>
    <section class="">
        <div class="">
            <h1 class="">Linksy: Conectando talentos, criando oportunidades.</h1>
        </div>
        <div class="">
            <input type="text" placeholder="Primeiro Nome" class="">
            <input type="text" placeholder="Último nome">
        </div>
            
        <div class="">
            <input type="password" placeholder="Senha" class="">
            <input type="password" placeholder="Confirmar senha">
        </div>

        <div class="">
            <input type="email" placeholder="Email" class="">
        </div>

        <div>
            <p>O que você está buscando no Linksy?</p>
            <label class="">
                <input type="checkbox" name="Ser_contratado" id="Ser_contratado" class="peer w-6 h-6 bg-[#1A1D21] cursor-pointer appearance-none rounded border border-[#363A3D] checked:bg-gradient-to-tr from-[#4D62E5] from-0% via-[#87DDEE] via-45% to-[#B6F09C] to-100% checked:border-none">
                    <svg width="12" height="8" class="absolute left-[6px] bottom-2 opacity-0 peer-checked:opacity-100" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 3.4L4.14546 6.22183C4.54054 6.64324 5.20946 6.64324 5.60454 6.22183L10.5 1" stroke="#0C1132" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </label>
            <label for="lembrar_senha" class="text-[#CDCECF] text-base font-medium">Ser contratado?</label>

            <label class="">
                <input type="checkbox" name="Contratar_alguem" id="Contratar_alguem" class="peer w-6 h-6 bg-[#1A1D21] cursor-pointer appearance-none rounded border border-[#363A3D] checked:bg-gradient-to-tr from-[#4D62E5] from-0% via-[#87DDEE] via-45% to-[#B6F09C] to-100% checked:border-none">
                    <svg width="12" height="8" class="absolute left-[6px] bottom-2 opacity-0 peer-checked:opacity-100" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 3.4L4.14546 6.22183C4.54054 6.64324 5.20946 6.64324 5.60454 6.22183L10.5 1" stroke="#0C1132" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </label>
            <label for="Contratar_alguem" class="text-[#CDCECF] text-base font-medium">Contratar alguém para seu time?</label>
        </div>

        <div>
            <label class="">
                <input type="checkbox" name="Eu_concordo" id="Eu_concordom" class="peer w-6 h-6 bg-[#1A1D21] cursor-pointer appearance-none rounded border border-[#363A3D] checked:bg-gradient-to-tr from-[#4D62E5] from-0% via-[#87DDEE] via-45% to-[#B6F09C] to-100% checked:border-none">
                    <svg width="12" height="8" class="absolute left-[6px] bottom-2 opacity-0 peer-checked:opacity-100" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 3.4L4.14546 6.22183C4.54054 6.64324 5.20946 6.64324 5.60454 6.22183L10.5 1" stroke="#0C1132" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </label>
            <label for="Eu_concordo" class="text-[#CDCECF] text-base font-medium">Eu concordo com os Termos e condições.</label>
        </div>

        <div>
            <a href="#" class="">Crie sua conta gratuita</a>
        </div>

        <div class="2">
                    <p class="">Já possui uma conta?<a href="login" class=""> Faça Login  </a></p>
                </div>

    </section>
</template>

<style setup>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');

.font-jakarta {
    font-family: 'Plus Jakarta Sans', sans-serif;
}
</style>

