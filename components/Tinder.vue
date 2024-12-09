<template>
  <section class="w-full lg:w-6/12 xl:w-4/12 p-6 flex flex-col items-center text-white font-jakarta lg:ml-24 xl:ml-96">
    <div class="flex flex-col items-center overflow-y-auto w-full">

      <!-- Navegação Anterior e Próxima -->
      <div class="flex items-center w-full justify-between">
        <img 
          src="../public/img/flecha.svg" 
          class="rotate-180 cursor-pointer hidden lg:block" 
          alt="Voltar" 
          @click="anteriorPerfil"
        />

        <!-- Imagem do Perfil -->
        <img :src="perfilAtual?.foto?.src || '../public/img/avatar-placeholder.jpg'" :alt="perfilAtual?.foto?.name || 'Avatar'" class="rounded-2xl w-full max-w-96 md:w-8/12 lg:w-10/12 lg:max-w-screen-xl"/>

        <img 
          src="../public/img/flecha.svg" 
          class="cursor-pointer hidden lg:block" 
          alt="Avançar" 
          @click="proximoPerfil"
        />
      </div>

      <!-- Informações do Perfil -->
      <div v-if="perfilAtual" class="bg-[#171B1F] mt-5 md:mt-10 rounded-2xl p-6 w-full max-w-96 md:w-8/12 lg:w-9/12">
        <div class="flex justify-between">
          <p class="text-2xl font-bold">{{ perfilAtual.nome }}</p>
          <p class="text-2xl font-medium">{{ calcularIdade(perfilAtual.dataAniversario) }}</p>
        </div>
        <p class="text-sm text-gray-400">{{ perfilAtual.localizacao }}</p>
        <div class="mt-4 space-y-2 text-[#CFCFCF] font-medium text-base xl:text-lg">
          <p>{{ perfilAtual.bio }}</p>
        </div>
      </div>

      <!-- Botões de Ação -->
      <div class="flex mt-4 space-x-4">
        <a href="#"><img src="../public/img/undo-button.svg" alt="Botão de voltar"></a>
        <a href="#"><img src="../public/img/dislike-button.svg" alt="Botão de dislike"></a>
        <a href="#"><img src="../public/img/like-button.svg" alt="Botão de like"></a>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Estado para armazenar os perfis e o índice atual
const perfis = ref([]);
const indiceAtual = ref(0);

// Carregar perfis do backend
const fetchPerfis = async () => {
  try {
    const response = await $fetch('/api/perfis/getAll.perfil');
    perfis.value = response.data;
  } catch (error) {
    console.error('Erro ao carregar perfis:', error);
  }
};

// Computed para obter o perfil atual
const perfilAtual = computed(() => perfis.value[indiceAtual.value]);

// Função para navegar para o próximo perfil
const proximoPerfil = () => {
  if (indiceAtual.value < perfis.value.length - 1) {
    indiceAtual.value++;
  }
};

// Função para navegar para o perfil anterior
const anteriorPerfil = () => {
  if (indiceAtual.value > 0) {
    indiceAtual.value--;
  }
};

// Função para calcular a idade a partir da data de aniversário
const calcularIdade = (dataAniversario) => {
  const hoje = new Date();
  const nascimento = new Date(dataAniversario);
  let idade = hoje.getFullYear() - nascimento.getFullYear();
  const mes = hoje.getMonth() - nascimento.getMonth();
  if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
    idade--;
  }
  return idade;
};

// Carregar os perfis quando o componente for montado
onMounted(() => {
  fetchPerfis();
});
</script>
