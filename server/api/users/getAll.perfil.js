import Perfil from "~/server/models/Perfil";

export default defineEventHandler(async (event) => {
  try {
    // Busca todos os perfis no banco de dados
    const perfis = await Perfil.find();

    return { data: perfis };
  } catch (error) {
    console.error("Erro ao buscar perfis:", error);
    throw createError({ statusCode: 500, message: "Erro ao buscar perfis." });
  }
});
