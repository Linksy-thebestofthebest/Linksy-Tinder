import Perfil from "~/server/models/User";

export default defineEventHandler(async (event) => {
  try {
    // Obtém o ID do perfil a partir da URL
    const { id } = event.context.params;

    // Busca o perfil pelo ID
    const perfil = await Perfil.findById(id);

    if (!perfil) {
      return { data: null }; // Retorna null se o perfil não existir
    }

    return { data: perfil };
  } catch (error) {
    console.error("Erro ao buscar perfil:", error);
    throw createError({ statusCode: 500, message: "Erro ao buscar perfil." });
  }
});
