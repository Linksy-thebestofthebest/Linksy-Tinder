import authMiddleware from '~/server/middleware/auth';

export default defineEventHandler(async (event) => {
  await authMiddleware(event); // Agora faz sentido usar await
  return { message: 'Perfil carregado com sucesso!' };
});
