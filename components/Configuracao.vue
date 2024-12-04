<template>
  <section class="bg-[#131619] min-h-screen font-jakarta flex flex-col items-center">
    <!-- Cabeçalho -->
    <div class="flex flex-col pt-6 border-b w-11/12">
      <h1 class="font-bold text-white text-3xl mb-2">Configurações</h1>
      <h3 class="text-[#B2B2B2] text-base mb-3">Gerencie as configurações da sua conta</h3>
    </div>

    <!-- Formulário -->
    <div class="flex flex-col w-1/3">
      <!-- Seção de Perfil -->
      <div class="flex flex-col pt-6 border-b w-11/12">
        <h2 class="font-bold text-white text-2xl my-2">Perfil</h2>
        <p class="text-[#C9C9C9] text-sm mb-3">É assim que os outros verão você no site.</p>
      </div>

      <!-- Foto -->
      <div class="flex flex-col my-4">
        <label 
          class="w-48 h-48 bg-gray-300 flex items-center justify-center text-gray-500 rounded-full cursor-pointer transition-all duration-300 outline-none overflow-hidden hover:bg-gray-400 hover:text-gray-600 active:bg-gray-200 active:text-teal-950" 
          for="foto" 
          tabindex="0"
        >
          <span class="w-full h-full flex items-center justify-center">
            <span v-if="!imagePreview" class="text-center">{{ placeholder }}</span>
            <img v-else :src="imagePreview" class="w-full h-full object-cover" />
          </span>
        </label>
        <input type="file" name="foto" id="foto" class="hidden" @change="handleFileChange" />
      </div>

      <!-- Nome -->
      <div class="flex flex-col my-4">
        <label for="nome" class="text-white text-base font-semibold mb-2">Nome de usuário</label>
        <input 
          type="text" 
          v-model="nome" 
          name="nome" 
          id="nome" 
          placeholder="Lucas Silva" 
          class="border-[#D9D9D9] border bg-transparent p-2 rounded-md text-[#C9C9C9]" 
        />
      </div>

      <!-- Data de Aniversário -->
      <div class="flex flex-col my-4">
        <label for="data" class="text-white text-base font-semibold mb-2">Data de aniversário</label>
        <input 
          type="date" 
          v-model="dataAniversario" 
          name="data" 
          id="data" 
          class="border-[#D9D9D9] border bg-transparent p-2 rounded-md text-[#C9C9C9]" 
        />
      </div>

      <!-- Localização -->
      <div class="flex flex-col my-4">
        <p class="text-white text-base font-semibold">Localização</p>
        <label for="local" class="text-xs mt-2 mb-4 text-[#C9C9C9]">Coloque a cidade onde você mora</label>
        <input 
          type="text" 
          v-model="localizacao" 
          name="local" 
          id="local" 
          placeholder="São Paulo" 
          class="border-[#D9D9D9] border bg-transparent p-2 rounded-md text-[#C9C9C9]" 
        />
      </div>

      <!-- Biografia -->
      <div class="flex flex-col my-4">
        <p class="text-white text-base font-semibold">Biografia</p>
        <label for="bio" class="text-xs mt-2 mb-4 text-[#C9C9C9]">Faça uma breve descrição sobre você, quais cursos já fez, o que sabe, quais são suas experiências</label>
        <textarea 
          name="bio" 
          v-model="bio" 
          id="bio" 
          cols="40" 
          rows="5" 
          class="border-[#D9D9D9] border bg-transparent p-2 rounded-md text-[#C9C9C9]"
        ></textarea>
      </div>

      <!-- URL -->
      <div class="flex flex-col my-4">
        <p class="text-white text-base font-semibold">URLs</p>
        <label for="link" class="text-xs mt-2 mb-4 text-[#C9C9C9]">Adicione links como github, linkedin</label>
        <input 
          type="url" 
          v-model="url" 
          name="link" 
          id="link" 
          class="border-[#D9D9D9] border bg-transparent p-2 rounded-md text-[#C9C9C9]" 
        />
      </div>

      <!-- Botões de Ação -->
      <div class="mb-5 mt-8">
        <button 
          v-if="isEditing" 
          type="button" 
          @click="atualizarPerfil" 
          class="text-black bg-[#D9D9D9] p-4 font-semibold rounded-lg hover:bg-[#919191] duration-200 transition-all"
        >
          Atualizar Perfil
        </button>
        <button 
          v-else 
          type="button" 
          @click="salvarPerfil" 
          class="text-black bg-[#D9D9D9] p-4 font-semibold rounded-lg hover:bg-[#919191] duration-200 transition-all"
        >
          Cadastrar Perfil
        </button>
      </div>
    </div>
  </section>
</template>


<script setup>
import { ref, onMounted } from "vue";

// Campos do formulário
const nome = ref("");
const dataAniversario = ref("");
const localizacao = ref("");
const bio = ref("");
const url = ref("");
const foto = ref(null);
const imagePreview = ref(null);
const placeholder = "Selecione uma imagem";

// Variável para definir se está editando
const isEditing = ref(false);

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

// Carrega os dados do perfil (se existir)
const carregarPerfil = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
        alert('Usuário não autenticado.');
        return;
    }

    try {
        const response = await $fetch('/api/perfis/getMyPerfil', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        console.log('Perfil carregado:', response);
        // Faça algo com o perfil carregado
    } catch (error) {
        console.error('Erro ao carregar perfil:', error);
    }
};

// Lida com criação ou atualização de perfil
const salvarPerfil = async () => {
  if (!nome.value || !dataAniversario.value || !localizacao.value || !bio.value) {
    alert("Todos os campos obrigatórios devem ser preenchidos.");
    return;
  }

  if (!foto.value && !isEditing.value) {
    alert("A foto é obrigatória para criar o perfil.");
    return;
  }

  const formData = new FormData();
  formData.append("nome", nome.value);
  formData.append("dataAniversario", dataAniversario.value);
  formData.append("localizacao", localizacao.value);
  formData.append("bio", bio.value);
  formData.append("url", url.value || "");
  if (foto.value) formData.append("foto", foto.value);



  try {
    const token = localStorage.getItem('token');
    if (!token) {
      alert("Usuário não autenticado.");
      return;
    }
    const response = await $fetch("/api/perfis/create.post.perfil", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });
    console.log("Resposta do servidor:", response);
    alert("Perfil criado com sucesso!");
  } catch (error) {
    console.error("Erro ao salvar perfil:", error);
    alert("Erro ao salvar perfil. Verifique os campos e tente novamente.");
  }
};



// Carrega os dados do perfil ao montar o componente
onMounted(() => {
  carregarPerfil();
});
</script>


<style setup>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');

.font-jakarta {
    font-family: 'Plus Jakarta Sans', sans-serif;
}

</style>