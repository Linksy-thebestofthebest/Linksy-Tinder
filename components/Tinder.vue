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

