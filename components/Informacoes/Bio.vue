<template>
    <div class="bg-[#171B1F] mt-5 md:mt-10 rounded-2xl p-6 md:w-8/12 lg:w-9/12">
        <div class="flex justify-between">
            <p class="text-2xl font-bold">{{ nome }}</p>
            <p class="text-2xl font-medium">{{ idade }}</p>
        </div>
        <p class="text-sm text-gray-400">{{ localizacao }}</p>
        <div class="mt-4 space-y-2 text-[#CFCFCF] font-medium text-base xl:text-lg">
            <p><strong class="text-[#e1e1e1]">Instituição:</strong> {{ instituicao }}</p>
            <p><strong class="text-[#e1e1e1]">Curso:</strong> {{ curso }}</p>
            <p><strong class="text-[#e1e1e1]">Certificações:</strong> {{ certificacoes }}</p>
            <p><strong class="text-[#e1e1e1]">Conhecimento:</strong> {{ conhecimentos }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        nome: String,
        idade: String,
        localizacao: String,
        instituicao: String,
        curso: String,
        certificacoes: String,
        conhecimentos: String,
    },
};
</script>
