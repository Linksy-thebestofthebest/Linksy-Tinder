import bcrypt from 'bcryptjs';
import User from "~/server/models/User";

export default defineEventHandler(async (event) => {
  const { primeiroNome, ultimoNome, email, senha, confirma_senha, escolha } = await readBody(event);

  // Verifica campos obrigatórios
  if (!primeiroNome || !ultimoNome || !email || !senha || !confirma_senha || !escolha) {
    return sendError(
      event,
      createError({
        status: 406,
        statusMessage: "Campos obrigatórios não preenchidos"
      })
    );
  }

  // Verifica se as senhas coincidem
  if (senha !== confirma_senha) {
    return sendError(
      event,
      createError({
        status: 406,
        statusMessage: "As senhas não coincidem"
      })
    );
  }

  // Verifica se o usuário já existe
  const userExists = await User.findOne({ email });
  if (userExists) {
    return sendError(
      event,
      createError({
        status: 400,
        statusMessage: "Usuário já existe"
      })
    );
  }

  // Criptografa a senha
  const hashedPassword = await bcrypt.hash(senha, 10);

  // Cria um novo usuário (exclui confirma_senha)
  const newUser = new User({
    primeiroNome,
    ultimoNome,
    email,
    senha: hashedPassword,
    escolha,
  });

  try {
    // Salva o usuário no banco de dados
    const createdUser = await newUser.save();

    // Converte o documento do Mongoose para um objeto puro
    const userObject = createdUser.toObject();

    // Remove a senha antes de retornar
    delete userObject.senha;

    return {
      success: true,
      user: userObject, // Retorna o objeto serializável
    };
  } catch (error) {
    return sendError(
      event,
      createError({
        status: 500,
        statusMessage: "Erro ao cadastrar o usuário"
      })
    );
  }
});
