import { readMultipartFormData } from "h3";
import { promises as fs } from "fs";
import path from "path";
import Perfil from "~/server/models/Perfil";

export default defineEventHandler(async (event) => {
  try {
    // Lê os dados enviados no formulário (incluindo o arquivo)
    const form = await readMultipartFormData(event);

    const fields = {};
    let fotoPath = null;

    // Processa os campos e o arquivo
    for (const field of form) {
      if (field.type === "file") {
        const uploadDir = path.resolve("public/uploads");
        const fileName = `${Date.now()}-${field.filename}`;
        const filePath = path.join(uploadDir, fileName);

        // Salva o arquivo no diretório
        await fs.mkdir(uploadDir, { recursive: true });
        await fs.writeFile(filePath, field.data);

        fotoPath = `/uploads/${fileName}`;
      } else {
        fields[field.name] = field.value;
      }
    }

    // Validação básica
    const { nome, dataAniversario, localizacao, bio, url } = fields;
    if (!nome || !dataAniversario || !localizacao || !bio) {
      throw createError({
        statusCode: 400,
        statusMessage: "Todos os campos obrigatórios devem ser preenchidos.",
      });
    }

    // Cria um novo perfil
    const novoPerfil = new Perfil({
      nome,
      dataAniversario,
      localizacao,
      bio,
      url,
      foto: fotoPath, // Caminho da foto
    });

    // Salva no banco de dados
    const perfilCriado = await novoPerfil.save();

    return {
      status: "success",
      data: perfilCriado,
    };
  } catch (error) {
    console.error(error);
    return sendError(event, createError({ statusCode: 500, statusMessage: error.message }));
  }
});
