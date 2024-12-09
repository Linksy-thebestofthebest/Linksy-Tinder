<template>
    <section
        class="w-full lg:w-6/12 xl:w-4/12 p-6 flex flex-col items-center text-white font-jakarta lg:ml-24 xl:ml-96">
        <div class="flex flex-col items-center overflow-y-auto">
            <div class="flex">
                <img src="../public/img/flecha.svg" class="rotate-180 cursor-pointer hidden lg:block" alt="Anterior"
                    @click="handleDislike" />
                <img :src="currentImage" class="w-72 h-96 object-cover" alt="Imagem atual" />
                <img src="../public/img/flecha.svg" class="cursor-pointer hidden lg:block" alt="Próximo"
                    @click="handleLike" />
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
            <Bio v-if="currentBio" :nome="currentBio.nome" :idade="currentBio.idade"
                :localizacao="currentBio.localizacao" :instituicao="currentBio.instituicao" :curso="currentBio.curso"
                :certificacoes="currentBio.certificacoes" :conhecimentos="currentBio.conhecimentos" />
            <p v-else class="mt-4 text-lg font-bold">Não há mais perfis disponíveis.</p>
        </div>
    </section>
</template>

<script>
import Bio from "@/components/Informacoes/Bio.vue";

export default {
    components: {
        Bio,
    },
    data() {
        return {
            images: [
                {
                    src: "/img/eu-2.jfif",
                    bio: {
                        nome: "André",
                        idade: "18",
                        localizacao: "São Paulo, SP",
                        instituicao: "FIAP",
                        curso: "Análise e Desenvolvimento de Sistemas",
                        certificacoes: "Front-end FIAP, Banco de Dados FIAP, JavaScript Alura, React (formação completa Alura)",
                        conhecimentos: "Front e Back, React, MongoDB, Vue, Nuxt, JavaScript, Python, Java, SQL, MySQL, Next, HTML, CSS, Tailwind",
                    },
                },
                {
                    src: "/img/teste-1.jpg",
                    bio: {
                        nome: "Joca",
                        idade: "22",
                        localizacao: "Rio de Janeiro, RJ",
                        instituicao: "PUC-Rio",
                        curso: "Engenharia de Software",
                        certificacoes: "Java Avançado Alura, UX/UI Design FIAP",
                        conhecimentos: "Java, Spring Boot, Figma, Vue, Nuxt, SQL, HTML, CSS, Tailwind",
                    },
                },
                {
                    src: "/img/teste-2.jpg",
                    bio: {
                        nome: "Carlos",
                        idade: "25",
                        localizacao: "Belo Horizonte, MG",
                        instituicao: "UFMG",
                        curso: "Ciência da Computação",
                        certificacoes: "Python para Data Science Alura, Machine Learning Coursera",
                        conhecimentos: "Python, Pandas, NumPy, Scikit-Learn, JavaScript, React, SQL",
                    },
                },
                {
                    src: "/img/teste-3.jpg",
                    bio: {
                        nome: "Lucas",
                        idade: "27",
                        localizacao: "Porto Alegre, RS",
                        instituicao: "PUC-RS",
                        curso: "Sistemas de Informação",
                        certificacoes: "Java Completo Alura, DevOps Coursera",
                        conhecimentos: "Java, Spring Boot, Docker, Kubernetes, Git, SQL, Vue, Nuxt",
                    },
                },
                {
                    src: "/img/teste-4.jpg",
                    bio: {
                        nome: "Fernando",
                        idade: "29",
                        localizacao: "Brasília, DF",
                        instituicao: "UnB",
                        curso: "Análise e Desenvolvimento de Sistemas",
                        certificacoes: "Certificação Scrum Master, Desenvolvimento Ágil Alura",
                        conhecimentos: "Agile, Scrum, Kanban, JavaScript, Node.js, React, SQL, PostgreSQL",
                    },
                },
                {
                    src: "/img/teste-5.jpg",
                    bio: {
                        nome: "Shima",
                        idade: "26",
                        localizacao: "São Luís, MA",
                        instituicao: "UFMA",
                        curso: "Engenharia da Computação",
                        certificacoes: "React Avançado Alura, Node.js Completo Rocketseat",
                        conhecimentos: "React, React Native, Node.js, Express, MongoDB, SQL, Docker",
                    },
                },
                {
                    src: "/img/teste-6.jpg",
                    bio: {
                        nome: "Adalberto",
                        idade: "22",
                        localizacao: "Salvador, BA",
                        instituicao: "UFBA",
                        curso: "Ciência da Computação",
                        certificacoes: "Fullstack Developer FIAP, JavaScript Alura",
                        conhecimentos: "JavaScript, React, Node.js, Python, SQL, HTML, CSS, Tailwind",
                    },
                },
                {
                    src: "/img/teste-7.jpg",
                    bio: {
                        nome: "Dagoberto",
                        idade: "24",
                        localizacao: "Fortaleza, CE",
                        instituicao: "UECE",
                        curso: "Sistemas de Informação",
                        certificacoes: "Desenvolvimento Front-end Alura, UX/UI Design FIAP",
                        conhecimentos: "HTML, CSS, JavaScript, Vue, Figma, Tailwind, SQL, Git",
                    },
                },
            ],
            currentIndex: 0,
            history: [],
        };
    },
    computed: {
        currentImage() {
            return this.images.length > 0 ? this.images[this.currentIndex].src : "";
        },
        currentBio() {
            return this.images.length > 0 ? this.images[this.currentIndex].bio : null;
        },
    },
    methods: {
        handleLike() {
            this.handleAction();
        },
        handleDislike() {
            this.handleAction();
        },
        handleUndo() {
            if (this.history.length > 0) {
                this.images.splice(this.currentIndex, 0, this.history.pop());
            }
        },
        handleAction() {
            if (this.images.length > 0) {
                this.history.push(this.images.splice(this.currentIndex, 1)[0]);
                this.currentIndex = 0;
            }
        },
    },
};
</script>




<style setup>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');

.font-jakarta {
    font-family: 'Plus Jakarta Sans', sans-serif;
}
</style>