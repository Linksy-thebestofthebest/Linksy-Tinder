<template>
    <section class="flex bg-[#131619] min-h-screen font-jakarta">
        <div class="w-2/3 flex flex-col">
            <div class="flex items-start m-6">
                <img src="../public/img/logo.svg" alt="Logo Linksy">
            </div>
            <div class="flex flex-col  ml-48">
                <div class="flex flex-col gap-2 mb-10">
                    <h1 class="text-white text-4xl">Linksy: Conectando talentos, criando oportunidades.</h1>
                </div>
            </div>
            
            <form @submit.prevent="cadastrar" class="flex flex-col gap-12 w-full">
                <div class="flex gap-12">
                    <div class="flex flex-col gap-4 w-1/3 ml-48">
                        <div class="flex flex-col">
                            <label for="primeiro" class="text-[#9B9C9E] mb-4">Nome completo</label>
                            <input type="text" v-model="primeiroNome" placeholder="Nome" id="primeiro" 
                                class="border-2 border-[#363A3D] bg-[#1A1D21] w-full text-lg text-[#9B9C9E] px-2 py-2 rounded-lg">
                        </div>
                        <div class="flex flex-col">
                            <label for="senha" class="text-[#9B9C9E] mb-4">Senha</label>
                            <input type="password" v-model="senha" placeholder="Senha" id="senha" 
                                class="border-2 border-[#363A3D] bg-[#1A1D21] w-full text-lg text-[#9B9C9E] px-2 py-2 rounded-lg">
                        </div>
                        <div class="flex flex-col">
                            <label for="email" class="text-[#9B9C9E] mb-4">Email</label>
                            <input type="email" v-model="email" placeholder="Email" id="email"
                                class="border-2 border-[#363A3D] bg-[#1A1D21] w-full text-lg text-[#9B9C9E] px-2 py-2 rounded-lg">
                        </div>
                    </div>


                    <div class="flex flex-col gap-4 w-1/3">
                        <div class="flex flex-col">
                            <label for="data" class="text-[#9B9C9E] mb-4">Data de aniversário</label>
                            <input type="date" name="data" id="data"
                                class="border-2 border-[#363A3D] bg-[#1A1D21] w-full text-lg text-[#9B9C9E] px-2 py-2 rounded-lg">
                        </div>
                        <div class="flex flex-col">
                            <label for="confirmar-senha" class="text-[#9B9C9E] mb-4">Confirmar Senha</label>
                            <input type="password" v-model="confirmaSenha" placeholder="Confirmar Senha" id="confirmar-senha" 
                                class="border-2 border-[#363A3D] bg-[#1A1D21] w-full text-lg text-[#9B9C9E] px-2 py-2 rounded-lg">
                        </div>
                        <div class="flex flex-col">
                            <label for="local" class="text-[#9B9C9E] mb-4">Cidade onde mora</label>
                            <input type="text" name="local" id="local" placeholder="São Paulo" 
                                class="border-2 border-[#363A3D] bg-[#1A1D21] w-full text-lg text-[#9B9C9E] px-2 py-2 rounded-lg">
                        </div>
                    </div>
                </div>
                <div class="flex gap-4 ml-48">
                    <div class="flex flex-col gap-4">
                        <div class="flex flex-col">
                            <p class="text-[#c5c6c8] text-base font-semibold">Biografia</p>
                            <label for="bio" class="text-xs mt-2 mb-4 text-[#C9C9C9]">Faça uma breve descrição sobre você, quais cursos já fez, o que sabe, quais são suas experiências</label>
                            <textarea name="bio" id="bio" cols="40" rows="3" class="border-2 min-w-[50rem] border-[#363A3D] bg-[#1A1D21] text-lg text-[#9B9C9E] rounded-lg"></textarea>
                        </div>
                    </div>
                </div>
                <div class="text-[#9B9C9E] ml-48">
                    <p class="text-[#c5c6c8] mb-4">O que você está buscando no Linksy?</p>
                    <div class="flex gap-[8rem] items-center">
                        <div class="flex items-center gap-3">
                            <label class="cursor-pointer relative w-6 h-6">
                                <input type="checkbox" v-model="trabalhar" name="ser-contratado" id="ser-contratado" class="peer w-6 h-6 bg-[#1A1D21] cursor-pointer appearance-none rounded border border-[#363A3D] checked:bg-gradient-to-tr from-[#4D62E5] from-0% via-[#87DDEE] via-45% to-[#B6F09C] to-100% checked:border-none">
                                <svg width="12" height="8" class="absolute left-[6px] bottom-2 opacity-0 peer-checked:opacity-100" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.5 3.4L4.14546 6.22183C4.54054 6.64324 5.20946 6.64324 5.60454 6.22183L10.5 1" stroke="#0C1132" stroke-width="2" stroke-linecap="round"/>
                                </svg>
                            </label>
                            <label for="ser-contratado" class="text-[#9B9C9E] text-base font-medium">Ser contratado?</label>
                        </div>
                        <div class="flex items-center gap-3">
                            <label class="cursor-pointer relative w-6 h-6">
                                <input type="checkbox" v-model="contratar" name="contratar" id="contratar" class="peer w-6 h-6 bg-[#1A1D21] cursor-pointer appearance-none rounded border border-[#363A3D] checked:bg-gradient-to-tr from-[#4D62E5] from-0% via-[#87DDEE] via-45% to-[#B6F09C] to-100% checked:border-none">
                                <svg width="12" height="8" class="absolute left-[6px] bottom-2 opacity-0 peer-checked:opacity-100" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.5 3.4L4.14546 6.22183C4.54054 6.64324 5.20946 6.64324 5.60454 6.22183L10.5 1" stroke="#0C1132" stroke-width="2" stroke-linecap="round"/>
                                </svg>
                            </label>
                            <label for="contratar" class="text-[#9B9C9E] text-base font-medium">Contratar?</label>
                        </div>
                    </div>
                    <div class="flex items-center mt-5">
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
                    <button type="submit" class="bg-[#B6F09C] font-semibold text-[#0C1132] flex w-9/12 items-center justify-center mt-2 mb-8 text-lg py-2 rounded-xl ">Criar conta</button>
                </div>
            </form>
            <div class="flex items-center justify-center w-1/1 mb-10">
                <p class="text-[#686B6E] font-semibold text-lg ml-[7rem]">Já possui uma conta?<a href="/login" class="ml-4 bg-clip-text bg-gradient-to-tr from-[#82DBF7] from-0% to-[#B6F09C] to-100% text-transparent"> Faça Login</a></p>
            </div>
        </div> 
        <div class="final min-h-screen">
            <img src="../public/img/imagem-cadastro.svg" alt="Imagem de cadastro" 
                class="absolute top-0 right-0 max-h-max ">
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
import { useRouter } from 'vue-router';

const primeiroNome = ref('');
const ultimoNome = ref('');
const email = ref('');
const senha = ref('');
const confirmaSenha = ref('');
const trabalhar = ref(false);
const contratar = ref(false);

const router = useRouter();

const cadastrar = async () => {
  if (senha.value !== confirmaSenha.value) {
    alert('As senhas não coincidem');
    return;
  }

  if (!trabalhar.value && !contratar.value) {
    alert('Você deve escolher "Ser contratado" ou "Contratar"');
    return;
  }

  if (trabalhar.value && contratar.value) {
    alert('Escolha apenas uma opção entre "Ser contratado" e "Contratar"');
    return;
  }
  
  const escolha = trabalhar.value ? "trabalhar" : "contratar";

  try {
    const response = await $fetch('/api/auth/register', {
      method: 'POST',
      body: {
        primeiroNome: primeiroNome.value,
        ultimoNome: ultimoNome.value,
        email: email.value,
        senha: senha.value,
        confirma_senha: confirmaSenha.value,
        escolha,
      },
    });



    alert('Usuário cadastrado com sucesso!');
    router.push('/');
  } catch (err) {
    console.error('Erro ao cadastrar usuário:', err);

    if (err.response && err.response._data) {
      alert(`Erro: ${err.response._data.message}`);
    } else {
      alert('Erro desconhecido ao cadastrar usuário. Tente novamente.');
    }
  }
};
</script>


