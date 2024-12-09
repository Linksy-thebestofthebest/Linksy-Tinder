import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from "~/server/models/User";

export default defineEventHandler(async (event) => {
  const { email, senha } = await readBody(event);

  if (!email || !senha) {
    return sendError(
      event,
      createError({
        status: 406,
        statusMessage: "Campos obrigatórios não preenchidos"
      })
    );
  }

  // Verificando se o usuário existe
  const user = await User.findOne({ email });
  
  if (!user) {
    return sendError(
      event,
      createError({
        status: 400,
        statusMessage: "Usuário não encontrado"
      })
    );
  }

  // Verificando se a senha está correta
  const isMatch = await bcrypt.compare(senha, user.senha);

  if (!isMatch) {
    return sendError(
      event,
      createError({
        status: 400,
        statusMessage: "Email ou senha incorretos"
      })
    );
  }

  // Criando um token JWT
  const token = jwt.sign({ id: user._id, nome: user.nome }, 'JWT_SECRET', { expiresIn: '1h' });

  return { 
    message: 'Login bem-sucedido', 
    token 
  };
});