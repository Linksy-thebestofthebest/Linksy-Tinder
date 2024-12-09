import User from "~/server/models/User";

export default defineEventHandler(async (event) => {
  try {
    // Busca todos os perfis no banco de dados
    const perfis = await User.find();

    return { data: perfis };
  } catch (error) {
    console.error("Erro ao buscar perfis:", error);
    throw createError({ statusCode: 500, message: "Erro ao buscar perfis." });
  }
});
