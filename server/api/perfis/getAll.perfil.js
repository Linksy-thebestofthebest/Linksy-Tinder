import Perfil from "~/server/models/Perfil";

export default defineEventHandler(async (event) => {
  const userId = event.context.user.id; // Obtém o ID do usuário autenticado

  try {
    // Busca todos os perfis, exceto o do usuário logado
    const perfis = await Perfil.find({ userId: { $ne: userId } });
    return { data: perfis };
  } catch (error) {
    console.error("Erro ao buscar perfis:", error);
    throw createError({ statusCode: 500, message: "Erro ao buscar perfis." });
  }
});
