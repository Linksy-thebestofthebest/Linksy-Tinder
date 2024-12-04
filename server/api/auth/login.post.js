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
        statusMessage: "Email e senha são obrigatórios"
      })
    );
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return sendError(
        event,
        createError({
          status: 400,
          statusMessage: "Credenciais inválidas"
        })
      );
    }

    const isMatch = await bcrypt.compare(senha, user.senha);

    if (!isMatch) {
      return sendError(
        event,
        createError({
          status: 400,
          statusMessage: "Credenciais inválidas"
        })
      );
    }

    // Criando um token JWT
    const token = jwt.sign(
      { id: user._id, nome: user.nome },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    return {
      message: 'Login bem-sucedido',
      token
    };
  } catch (error) {
    console.error("Erro ao realizar login:", error);
    return sendError(
      event,
      createError({
        status: 500,
        statusMessage: "Erro interno no servidor"
      })
    );
  }
});
