import jwt from 'jsonwebtoken';
import { defineEventHandler, getHeader, createError } from 'h3';

const SECRET_KEY = process.env.JWT_SECRET || 'your-secret-key';

export default defineEventHandler(async (event) => {
  const authHeader = getHeader(event, 'authorization');
  
  console.log('Authorization Header:', authHeader); // Log para depuração

  if (!authHeader) {
    throw createError({ statusCode: 401, message: 'Cabeçalho Authorization ausente' });
  }

  const tokenParts = authHeader.split(' ');

  if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
    throw createError({ statusCode: 401, message: 'Formato do token inválido' });
  }

  const token = tokenParts[1];

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    console.log('Decoded Token:', decoded); // Log do token decodificado
    event.context.user = { id: decoded.userId };
  } catch (error) {
    throw createError({ statusCode: 401, message: 'Token inválido ou expirado' });
  }
});
