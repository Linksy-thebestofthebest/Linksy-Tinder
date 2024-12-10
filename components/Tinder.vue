<template>
    <section class="w-full lg:w-6/12 xl:w-4/12 p-6 flex flex-col items-center text-white font-jakarta mt-12 lg:ml-24 xl:ml-96">
        <div class="flex flex-col items-center overflow-y-auto">
            <div class="flex">
                <img src="../public/img/flecha.svg" class="rotate-180 cursor-pointer hidden lg:block" alt="Anterior" @click="handleDislike" />
                <img :src="perfilAtual?.foto?.src || '/img/icon.svg'" :alt="perfilAtual?.foto?.name || 'Imagem atual'" class="w-72 h-96 object-cover rounded-3xl"/>
                <img src="../public/img/flecha.svg" class="cursor-pointer hidden lg:block" alt="Próximo" @click="handleLike" />
            </div>
            <div class="flex mt-4">
                <a href="#" @click.prevent="handleUndo">
                    <img src="../public/img/undo-button.svg" alt="Botão de voltar" />
                </a>
                <a href="#" @click.prevent="handleDislike">
                    <img src="../public/img/dislike-button.svg" alt="Botão de dislike" />
                </a>
                <a href="#" @click.prevent="handleLike">
                    <img src="../public/img/like-button.svg" alt="Botão de like" />
                </a>
            </div>
            <div v-if="perfilAtual" class="bg-[#171B1F] mt-5 md:mt-10 rounded-2xl p-6 md:w-8/12 lg:w-9/12">
              <div class="flex justify-between">
                <p class="text-2xl font-bold">{{ perfilAtual.nome }}</p>
                <p class="text-2xl font-medium">{{ calcularIdade(perfilAtual.dataAniversario) }}</p>
              </div>
              <p class="text-sm text-gray-400">{{ perfilAtual.localizacao }}</p>
              <div class="mt-4 space-y-2 text-[#CFCFCF] font-medium text-base xl:text-lg">
                <p> {{ perfilAtual.bio|| 'N/A' }}</p>
              </div>
            </div>
            <p v-else class="mt-4 text-lg font-bold">Não há mais perfis disponíveis.</p>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';

// Estado para armazenar os perfis e o índice atual
const perfis = ref([]);
const indiceAtual = ref(0);
const history = ref([]);

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

// Função para calcular a idade a partir da data de aniversário
const calcularIdade = (dataAniversario) => {
  if (!dataAniversario) return '';
  const hoje = new Date();
  const nascimento = new Date(dataAniversario);
  let idade = hoje.getFullYear() - nascimento.getFullYear();
  const mes = hoje.getMonth() - nascimento.getMonth();
  if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
    idade--;
  }
  return idade;
};

// Funções de Ação
const handleLike = () => {
  handleAction();
};

const handleDislike = () => {
  handleAction();
};

const handleUndo = () => {
  if (history.value.length > 0) {
    perfis.value.splice(indiceAtual.value, 0, history.value.pop());
  }
};

const handleAction = () => {
  if (perfis.value.length > 0) {
    history.value.push(perfis.value.splice(indiceAtual.value, 1)[0]);
    if (indiceAtual.value >= perfis.value.length) {
      indiceAtual.value = 0;
    }
  }
};

// Carregar os perfis quando o componente for montado
onMounted(() => {
  fetchPerfis();
});
</script>





<style setup>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');

.font-jakarta {
    font-family: 'Plus Jakarta Sans', sans-serif;
}
</style>