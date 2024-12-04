import Perfil from "~/server/models/Perfil";

export default defineEventHandler(async (event) => {
  const userId = event.context.user.id;
  if (!userId) {
    throw createError({
      statusCode: 401,
      message: 'Usuário não autenticado',
    });
  }

  // Buscar perfil no banco de dados
  const perfil = await Perfil.findOne({ userId });
  if (!perfil) {
    throw createError({
      statusCode: 404,
      message: 'Perfil não encontrado',
    });
  }

  return { data: perfil };
});
