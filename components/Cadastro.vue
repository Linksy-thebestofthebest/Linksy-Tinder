<template>
    <section class="flex justify-center bg-[#131619] min-h-screen font-jakarta">
        
        <div class="w-full md:w-2/3 flex flex-col px-4 md:px-0 ">
                <div class="flex mb-10 mt-10 gap-5 items-center xl:ml-[6rem] xl:mb-[4rem]">
                    <img class="w-[3rem]" src="../public/img/logo.svg" alt="Logo Linksy">
                    <h1 class="text-white text-2xl md:text-4xl mt-3">Linksy: Conectando talentos, criando oportunidades.</h1>
                </div>
            
            <form @submit.prevent="cadastrar" class="flex flex-col gap-12 w-full">
                <div class="flex flex-col md:flex-row gap-12">
                    <div class="flex flex-col gap-4 w-full md:w-1/2">
                        <div class="flex flex-col">
                            <label for="primeiro" class="text-[#9B9C9E] mb-4">Nome completo</label>
                            <input type="text" v-model="nome" placeholder="Nome" id="primeiro" 
                                class="border-2 border-[#363A3D] bg-[#1A1D21] w-full text-lg text-[#9B9C9E] px-2 py-2 rounded-lg">
                        </div>
                        <div class="flex flex-col">
                            <label for="email" class="text-[#9B9C9E] mb-4">Email</label>
                            <input type="email" v-model="email" placeholder="Email" id="email"
                                class="border-2 border-[#363A3D] bg-[#1A1D21] w-full text-lg text-[#9B9C9E] px-2 py-2 rounded-lg">
                        </div>
                        <div class="flex flex-col">
                            <label for="senha" class="text-[#9B9C9E] mb-4">Senha</label>
                            <input type="password" v-model="senha" placeholder="Senha" id="senha" 
                                class="border-2 border-[#363A3D] bg-[#1A1D21] w-full text-lg text-[#9B9C9E] px-2 py-2 rounded-lg">
                        </div>
                    </div>

                    <div class="flex flex-col gap-4 w-full md:w-1/2">
                        <div class="flex flex-col">
                            <label for="data" class="text-[#9B9C9E] mb-4">Data de aniversário</label>
                            <input type="date" v-model="dataAniversario" name="data" id="data"
                                class="border-2 border-[#363A3D] bg-[#1A1D21] w-full text-lg text-[#9B9C9E] px-2 py-2 rounded-lg">
                        </div>
                        <div class="flex flex-col">
                            <label for="local" class="text-[#9B9C9E] mb-4">Cidade onde mora</label>
                            <input type="text" v-model="localizacao" name="local" id="local" placeholder="São Paulo" 
                                class="border-2 border-[#363A3D] bg-[#1A1D21] w-full text-lg text-[#9B9C9E] px-2 py-2 rounded-lg">
                        </div>
                        <div class="flex flex-col">
                            <label for="confirmar-senha" class="text-[#9B9C9E] mb-4">Confirmar Senha</label>
                            <input type="password" v-model="confirmaSenha" placeholder="Confirmar Senha" id="confirmar-senha" 
                                class="border-2 border-[#363A3D] bg-[#1A1D21] w-full text-lg text-[#9B9C9E] px-2 py-2 rounded-lg">
                        </div>
                    </div>
                </div>

                <!-- Biografia & Foto -->
                <div class="flex flex-col md:flex-row gap-12">
                    <!-- Biografia -->
                    <div class="flex flex-col w-full md:w-1/2">
                        <p class="text-[#c5c6c8] text-base font-semibold">Biografia</p>
                        <label for="bio" class="text-xs mt-2 mb-4 text-[#C9C9C9]">Faça uma breve descrição sobre você, quais cursos já fez, o que sabe, quais são suas experiências</label>
                        <textarea name="bio" id="bio" cols="40" rows="5" v-model="bio" class="border-2 border-[#363A3D] bg-[#1A1D21] text-lg text-[#9B9C9E] rounded-lg"></textarea>
                    </div>

                    <!-- Foto -->
                    <div class="flex flex-col mt-8 md:mt-12 md:ml-[3rem] items-center xl:ml-[13rem]">
                        <label class="w-[10rem] h-[10rem] bg-gray-300 flex items-center justify-center text-gray-500 rounded-full cursor-pointer transition-all duration-300 outline-none overflow-hidden hover:bg-gray-400 hover:text-gray-600 active:bg-gray-200 active:text-teal-950"  for="foto" tabindex="0">
                        <span class="w-full h-full flex items-center justify-center">
                            <span v-if="!imagePreview" class="text-center">{{ placeholder }}</span>
                            <img v-else :src="imagePreview" class="w-full h-full object-cover" />
                        </span>
                        </label>
                        <input type="file" name="foto" id="foto" class="hidden" @change="handleFileChange" />
                    </div>
                </div>

                <!-- O que você está buscando -->
                <div class="text-[#9B9C9E] mt-8 md:ml-[6rem] lg:ml-[0rem] xl:ml-[1rem]">
                    <p class="text-[#c5c6c8] mb-4">O que você está buscando no Linksy?</p>
                    <div class="flex flex-col md:flex-row gap-[2rem] items-center">
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
                </div>

                <!-- Submit Button -->
                <div class="flex w-full mt-8 md:ml-[4.5rem] lg:ml-[5.4rem] xl:ml-[10rem]">
                    <button type="submit" class="bg-[#B6F09C] font-semibold text-[#0C1132] flex w-full md:w-9/12 items-center justify-center mb-8 text-lg py-2 rounded-xl ">Criar conta</button>
                </div>
            </form>

            <!-- Login Link -->
            <div class="flex items-center justify-center w-full mb-10">
                <p class="text-[#686B6E] font-semibold text-lg text-center">Já possui uma conta?<a href="/login" class="ml-4 bg-clip-text bg-gradient-to-tr from-[#82DBF7] from-0% to-[#B6F09C] to-100% text-transparent"> Faça Login</a></p>
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

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const nome = ref('');
const dataAniversario = ref('');
const email = ref('');
const senha = ref('');
const confirmaSenha = ref('');
const localizacao = ref('');
const bio = ref('');

const trabalhar = ref(false);
const contratar = ref(false);

const foto = ref(null);
const imagePreview = ref(null);
const placeholder = "Selecione uma imagem";

const router = useRouter();


const cadastrar = async () => {
    if (!nome.value) {
        alert("O campo 'Nome' é obrigatório.");
        return;
    }
    if (!dataAniversario.value) {
        alert("O campo 'Data de Aniversário' é obrigatório.");
        return;
    }
    if (!localizacao.value) {
        alert("O campo 'Localização' é obrigatório.");
        return;
    }
    if (!bio.value) {
        alert("O campo 'Biografia' é obrigatório.");
        return;
    }
    if (!foto.value) {
        alert("A foto é obrigatória.");
        return;
    }

    const formData = new FormData();
    formData.append("nome", nome.value);
    formData.append("dataAniversario", dataAniversario.value);
    formData.append("email", email.value);
    formData.append("senha", senha.value);
    formData.append("confirma_senha", confirmaSenha.value);
    formData.append("localizacao", localizacao.value);
    formData.append("bio", bio.value);
    formData.append("escolha", trabalhar.value ? "trabalhar" : "contratar");
    formData.append("foto", foto.value);

    console.log("Arquivo sendo enviado:", foto.value);
    console.log("Dados enviados:", Array.from(formData.entries()));

    try {
        const response = await $fetch("/api/auth/register", {
            method: "POST",
            body: formData,
        });
        alert("Usuário cadastrado com sucesso!");
        router.push("/login");
    } catch (error) {
        console.error("Erro ao cadastrar usuário:", error);
        alert("Erro ao cadastrar usuário. Verifique os campos e tente novamente.");
    }
};

// Manipula o upload da imagem
const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
        foto.value = file;
        const reader = new FileReader();
        reader.onload = (e) => {
            imagePreview.value = e.target.result;
        };
        reader.readAsDataURL(file);
    } else {
        alert("Por favor, selecione um arquivo de imagem válido.");
    }
};


</script>


