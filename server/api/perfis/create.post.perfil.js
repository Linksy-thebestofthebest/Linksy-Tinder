import Perfil from "~/server/models/Perfil";
import authMiddleware from "~/server/middleware/auth";

export default defineEventHandler(async (event) => {
  // Aplica o middleware de autenticação
  await authMiddleware(event);

  try {
    const userId = event.context.user?.id;

    if (!userId) {
      throw createError({ statusCode: 401, message: "Usuário não autenticado" });
    }

    const body = await readBody(event);
    const { nome, dataAniversario, localizacao, bio, url, foto } = body;

    if (!nome || !dataAniversario || !localizacao || !bio) {
      throw createError({ statusCode: 400, message: "Campos obrigatórios não preenchidos" });
    }

    const novoPerfil = new Perfil({
      userId,
      nome,
      dataAniversario,
      localizacao,
      bio,
      url,
      foto,
    });

    const perfilCriado = await novoPerfil.save();
    return { status: "success", data: perfilCriado };
  } catch (error) {
    console.error("Erro ao criar perfil:", error);
    throw createError({ statusCode: 500, message: "Erro ao criar perfil" });
  }
});
