import jwt from "jsonwebtoken";

export default defineEventHandler(async (event) => {
  const authHeader = event.node.req.headers.authorization; // Certifique-se de usar 'event.node.req'

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw createError({
      statusCode: 401,
      message: "Token de autenticação não fornecido.",
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, "JWT_SECRET"); // Substitua por sua chave secreta
    event.context.user = decoded; // Adicione o usuário ao contexto
  } catch (error) {
    throw createError({
      statusCode: 403,
      message: "Token inválido ou expirado.",
    });
  }
});
