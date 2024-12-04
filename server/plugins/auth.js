import jwt from 'jsonwebtoken';

export default defineEventHandler((event) => {
  const authHeader = event.req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw createError({
      statusCode: 401,
      message: 'Token de autenticação não fornecido.',
    });
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, 'JWT_SECRET');
    event.context.user = decoded; // Adiciona o usuário ao contexto
  } catch (error) {
    throw createError({
      statusCode: 403,
      message: 'Token inválido ou expirado.',
    });
  }
});
