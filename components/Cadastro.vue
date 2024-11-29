<template>
    <section class="flex bg-[#131619] min-h-screen font-jakarta">
        <div class="w-2/3 flex flex-col">
            <div class="flex items-start m-6">
                <img src="../public/img/logo.svg" alt="Logo Linksy">
            </div>
            <div class="flex flex-col mt-16 ml-48">
                <div class="flex flex-col gap-2 mb-10">
                    <h1 class="text-white text-4xl">Linksy: Conectando talentos, criando oportunidades.</h1>
                </div>
            </div>
            
            <div class="flex gap-12 w-full mb-8">

                <div class="flex flex-col gap-4 w-1/3 ml-48">
                    <div class="flex flex-col">
                        <label for="primeiro" class="text-[#9B9C9E] mb-4">Primeiro Nome</label>
                        <input type="text" placeholder="Primeiro Nome" id="primeiro" 
                            class="border-2 border-[#363A3D] bg-[#1A1D21] w-full text-lg text-[#9B9C9E] px-2 py-2 rounded-lg">
                    </div>
                    <div class="flex flex-col">
                        <label for="senha" class="text-[#9B9C9E] mb-4">Senha</label>
                        <input type="password" placeholder="Senha" id="senha" 
                            class="border-2 border-[#363A3D] bg-[#1A1D21] w-full text-lg text-[#9B9C9E] px-2 py-2 rounded-lg">
                    </div>
                    <div class="flex flex-col">
                        <label for="email" class="text-[#9B9C9E] mb-4">Email</label>
                        <input type="password" placeholder="Email" id="email"
                            class="border-2 border-[#363A3D] bg-[#1A1D21] w-full text-lg text-[#9B9C9E] px-2 py-2 rounded-lg">
                    </div>
                </div>


                <div class="flex flex-col gap-4 w-1/3">
                    <div class="flex flex-col">
                        <label for="ultimo" class="text-[#9B9C9E] mb-4">Último Nome</label>
                        <input type="text" placeholder="Último Nome" id="ultimo" 
                            class="border-2 border-[#363A3D] bg-[#1A1D21] w-full text-lg text-[#9B9C9E] px-2 py-2 rounded-lg">
                    </div>
                    <div class="flex flex-col">
                        <label for="confirmar-senha" class="text-[#9B9C9E] mb-4">Confirmar Senha</label>
                        <input type="password" placeholder="Confirmar Senha" id="confirmar-senha" 
                            class="border-2 border-[#363A3D] bg-[#1A1D21] w-full text-lg text-[#9B9C9E] px-2 py-2 rounded-lg">
                    </div>
                </div>
            </div>

                

            <div class="text-[#9B9C9E] ml-48 mb-7">
                <p class="text-[#9B9C9E] mb-4">O que você está buscando no Linksy?</p>
                <div class="flex gap-[8rem] items-center">
                    <div class="flex items-center gap-3">
                        <label class="cursor-pointer relative w-6 h-6">
                            <input type="checkbox" name="ser-contratado" id="ser-contratado" class="peer w-6 h-6 bg-[#1A1D21] cursor-pointer appearance-none rounded border border-[#363A3D] checked:bg-gradient-to-tr from-[#4D62E5] from-0% via-[#87DDEE] via-45% to-[#B6F09C] to-100% checked:border-none">
                            <svg width="12" height="8" class="absolute left-[6px] bottom-2 opacity-0 peer-checked:opacity-100" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.5 3.4L4.14546 6.22183C4.54054 6.64324 5.20946 6.64324 5.60454 6.22183L10.5 1" stroke="#0C1132" stroke-width="2" stroke-linecap="round"/>
                            </svg>
                        </label>
                        <label for="ser-contratado" class="text-[#9B9C9E] text-base font-medium">Ser contratado?</label>
                    </div>
                    <div class="flex items-center gap-3">
                        <label class="cursor-pointer relative w-6 h-6">
                            <input type="checkbox" name="contratar" id="contratar" class="peer w-6 h-6 bg-[#1A1D21] cursor-pointer appearance-none rounded border border-[#363A3D] checked:bg-gradient-to-tr from-[#4D62E5] from-0% via-[#87DDEE] via-45% to-[#B6F09C] to-100% checked:border-none">
                            <svg width="12" height="8" class="absolute left-[6px] bottom-2 opacity-0 peer-checked:opacity-100" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.5 3.4L4.14546 6.22183C4.54054 6.64324 5.20946 6.64324 5.60454 6.22183L10.5 1" stroke="#0C1132" stroke-width="2" stroke-linecap="round"/>
                            </svg>
                        </label>
                        <label for="contratar" class="text-[#9B9C9E] text-base font-medium">Contratar?</label>
                    </div>
                </div>
                <div class="flex items-center mt-6">
                    <label class="cursor-pointer relative w-6 h-6">
                        <input type="checkbox" name="concordar-termos" id="concordar-termos" class="peer w-6 h-6 bg-[#1A1D21] cursor-pointer appearance-none rounded border border-[#363A3D] checked:bg-gradient-to-tr from-[#4D62E5] from-0% via-[#87DDEE] via-45% to-[#B6F09C] to-100% checked:border-none">
                        <svg width="12" height="8" class="absolute left-[6px] bottom-2 opacity-0 peer-checked:opacity-100" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.5 3.4L4.14546 6.22183C4.54054 6.64324 5.20946 6.64324 5.60454 6.22183L10.5 1" stroke="#0C1132" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </label>
                    <label for="concordar-termos" class="text-[#9B9C9E] text-base font-medium ml-3">Eu concordo com os <span class="ml-1 bg-clip-text bg-gradient-to-tr from-[#82DBF7] from-0% to-[#B6F09C] to-100% text-transparent"> Termos e condições</span>.</label>
                </div>
            </div>

            <div class="flex w-full ml-[11rem]">
                <a href="#" class="bg-[#B6F09C] font-semibold text-[#0C1132] flex w-9/12 items-center justify-center my-8 text-lg py-2 rounded-xl ">Criar conta</a>
            </div>

            <div class="flex items-center justify-center w-1/1">
                <p class="text-[#686B6E] font-semibold text-lg ml-[7rem]">Já possui uma conta?<a href="login" class="ml-4 bg-clip-text bg-gradient-to-tr from-[#82DBF7] from-0% to-[#B6F09C] to-100% text-transparent"> Faça Login</a></p>
            </div>
        </div> 
        <div class="final min-h-screen">
            <img src="../public/img/imagem-cadastro.svg" alt="Imagem de cadastro" 
                class="absolute top-0 right-0 min-h-screen max-h-screen">
        </div>         

    </section>
</template>

<style setup>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');

.font-jakarta {
    font-family: 'Plus Jakarta Sans', sans-serif;
}
</style>

