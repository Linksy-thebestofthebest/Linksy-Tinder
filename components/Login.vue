<template>
    <section class="flex flex-col lg:flex-row bg-[#131619] font-jakarta min-h-screen">
    <div class="w-full lg:w-1/2 lg:ml-[4rem] flex flex-col px-6 lg:px-0">
        <div class="flex items-start mt-6 lg:mt-0">
            <img src="../public/img/logo.svg" alt="Logo Linksy" class=" sm:w-[2rem] md:w-[4rem] md:mt-[5rem]">
        </div>
        <form @submit.prevent="login" class="flex flex-col mt-16 lg:mt-20">
            <div class="flex flex-col gap-2 mb-10">
                <h1 class="text-white text-4xl sm:text-5xl lg:text-6xl xl:mt-[]">
                    Faça seu <span class="font-bold bg-clip-text bg-gradient-to-tr from-[#4D62E5] from-0% via-[#87DDEE] via-45% to-[#B6F09C] to-100% text-transparent">futuro!</span>
                </h1>
                <p class="text-[#9B9C9E] font-medium text-lg">Faça login na Linksy e encontre seu futuro.</p>
            </div>
            <div class="flex flex-col gap-3 w-full mb-8 ">
                <div class="flex w-full">
                    <input type="email" v-model="email" placeholder="Email" class="border-2 border-[#363A3D] bg-[#1A1D21] w-full md:mb-[2rem] lg:w-9/12 text-lg text-[#9B9C9E] px-2 py-2 rounded-lg">
                </div>
                <div>
                    <input type="password" v-model="senha" placeholder="Senha" class="border-2 border-[#363A3D] bg-[#1A1D21] w-full lg:w-9/12 text-lg text-[#9B9C9E] px-2 py-2 rounded-lg">
                </div>
            </div>
            <div class="flex justify-between lg:mr-40 items-center md:mb-[2rem] ">
                <div class="flex items-center gap-3">
                    <label class="cursor-pointer relative w-6 h-6">
                        <input type="checkbox" name="lembrar_senha" id="lembrar_senha" class="peer w-6 h-6 bg-[#1A1D21] cursor-pointer appearance-none rounded border border-[#363A3D] checked:bg-gradient-to-tr from-[#4D62E5] from-0% via-[#87DDEE] via-45% to-[#B6F09C] to-100% checked:border-none">
                        <svg width="12" height="8" class="absolute left-[6px] bottom-2 opacity-0 peer-checked:opacity-100" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.5 3.4L4.14546 6.22183C4.54054 6.64324 5.20946 6.64324 5.60454 6.22183L10.5 1" stroke="#0C1132" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </label>
                    <label for="lembrar_senha" class="text-[#CDCECF] text-base font-medium">Lembrar Senha</label>
                </div>
                <a href="#" class="bg-clip-text bg-gradient-to-tr from-[#82DBF7] from-0% to-[#B6F09C] to-100% text-transparent font-semibold xl:mr-[4rem]">Esqueceu a senha?</a>
            </div>
            <div class="flex w-full">
                <button type="submit" class="bg-[#B6F09C] font-semibold text-[#0C1132] flex w-full lg:w-9/12 items-center justify-center my-8 text-lg py-2 rounded-xl">Login</button>
            </div>
            <div class="flex items-center justify-center w-full lg:w-9/12">
                <p class="text-[#686B6E] font-semibold text-lg">Não possui uma conta?<a href="cadastro" class="bg-clip-text bg-gradient-to-tr from-[#82DBF7] from-0% to-[#B6F09C] to-100% text-transparent"> Cadastre-se</a></p>
            </div>
        </form>
    </div>
    <div class=" lg:w-1/2 flex justify-center items-center">
        <img src="../public/img/img-dois-login.svg" alt="" class="hidden w-full lg:block lg:mt-[12rem] xl:mt-[0rem] xl:w-[35rem]">
    </div>
</section>

</template>
<style setup>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');

.font-jakarta {
    font-family: 'Plus Jakarta Sans', sans-serif;
}
</style>
<script setup>
import { ref } from 'vue';

const email = ref('');
const senha = ref('');


const login = async () => {
    try {
        const response = await $fetch('/api/auth/login', {
            method: 'POST',
            body: {
                email: email.value,
                senha: senha.value,
            },
        });

        if (response.status === "error") {
            alert('Erro ao fazer login: ' + (response.message || 'Erro desconhecido'));
        } else {
            localStorage.setItem('token', response.token);
            await navigateTo('/buscar');
        }
    } catch (error) {
        console.error('Erro ao tentar logar:', error);
        alert('Erro ao tentar logar. Por favor, tente novamente.');
    }
};

</script>