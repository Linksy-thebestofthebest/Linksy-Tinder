<template>
  <section class="w-4/12 p-6 flex flex-col items-center text-white font-jakarta ml-96">
    <div class="flex flex-col items-center overflow-y-auto">
      <div class="flex">
        <!-- Botão de voltar -->
        <img src="../public/img/flecha.svg" class="rotate-180 cursor-pointer" @click="perfilAnterior"alt="Voltar"/>
        <!-- Imagem do Perfil -->
        <div v-if="perfis[perfilAtual]" class="flex justify-center">
          <img :src="perfis[perfilAtual].foto.src" alt="Foto do Perfil" class="rounded-2xl w-8/12"/>
        </div>
        <!-- Botão de avançar -->
        <img src="../public/img/flecha.svg" class="cursor-pointer" @click="proximoPerfil" alt="Avançar"/>
      </div>

      <!-- Botões de ação -->
      <div class="flex mt-4">
        <a href="#"><img src="../public/img/undo-button.svg" alt="Botão de voltar" /></a>
        <a href="#"><img src="../public/img/dislike-button.svg" alt="Botão de dislike" /></a>
        <a href="#"><img src="../public/img/super-like-button.svg" alt="Botão de super like" /></a>
        <a href="#"><img src="../public/img/like-button.svg" alt="Botão de like" /></a>
        <a href="#"><img src="../public/img/flash-button.svg" alt="Botão de raio" /></a>
      </div>

      <!-- Informações do Perfil -->
      <div v-if="perfis[perfilAtual]" class="bg-[#171B1F] mt-10 rounded-2xl p-6 w-8/12">
        <div class="flex justify-between">
          <p class="text-2xl font-bold">{{ perfis[perfilAtual].nome }}</p>
          <p class="text-2xl font-medium">{{ getAge(perfis[perfilAtual].dataAniversario) }}</p>
        </div>
        <p class="text-sm text-gray-400">{{ perfis[perfilAtual].localizacao }}</p>
        <div class="mt-4 space-y-2 text-[#CFCFCF] font-medium text-lg">
          <p>
            <strong class="text-[#e1e1e1]"></strong>
            {{ perfis[perfilAtual].bio || "Não informado" }}
          </p>  
          <p>
            <strong class="text-[#e1e1e1]">URL:</strong>
            {{ perfis[perfilAtual].url || "Não informado" }}
          </p>  
        </div>
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
import { ref, onMounted } from "vue";

// Estado do componente
const perfis = ref([]); // Lista de perfis
const perfilAtual = ref(0); // Índice do perfil atual

// Função para buscar os perfis do backend
async function fetchPerfis() {
  try {
    const response = await fetch("/api/perfis/getAll.perfil");
    const { data } = await response.json();

    perfis.value = data; // Armazena os perfis recebidos
  } catch (error) {
    console.error("Erro ao buscar perfis:", error);
  }
}

// Função para mudar para o próximo perfil
function proximoPerfil() {
  if (perfilAtual.value < perfis.value.length - 1) {
    perfilAtual.value++;
  }
}

// Função para voltar ao perfil anterior
function perfilAnterior() {
  if (perfilAtual.value > 0) {
    perfilAtual.value--;
  }
}

// Função para calcular idade
function getAge(birthdate) {
  const birth = new Date(birthdate);
  const diff = Date.now() - birth.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Carrega os perfis na montagem do componente
onMounted(() => {
  fetchPerfis();
});
</script>

