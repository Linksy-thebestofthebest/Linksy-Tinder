import Perfil from "~/server/models/Perfil";
import fs from "fs";
import path from "path";

export default defineEventHandler(async (event) => {
  try {
    const body = await readMultipartFormData(event);

    let fotoPath = null; // Novo caminho para a foto, se fornecida
    const fields = {};

    // Processa os campos e arquivos
    body.forEach((field) => {
      if (field.type === "file") {
        const fileName = `${Date.now()}-${field.filename}`;
        const filePath = path.join("public/uploads", fileName);
        fs.writeFileSync(filePath, field.data); // Salva o arquivo localmente
        fotoPath = `/uploads/${fileName}`;
      } else {
        fields[field.name] = field.value;
      }
    });

    const { id, nome, dataAniversario, localizacao, bio, url } = fields;

    // Valida os campos obrigatórios
    if (!id || !nome || !dataAniversario || !localizacao || !bio) {
      throw createError({
        statusCode: 400,
        message: "Todos os campos obrigatórios (exceto foto) devem ser preenchidos.",
      });
    }

    // Atualiza o perfil no banco
    const perfilAtualizado = await Perfil.findByIdAndUpdate(
      id,
      {
        nome,
        dataAniversario,
        localizacao,
        bio,
        url: url || null,
        ...(fotoPath && { foto: fotoPath }), // Atualiza a foto somente se for fornecida
      },
      { new: true }
    );

    if (!perfilAtualizado) {
      throw createError({ statusCode: 404, message: "Perfil não encontrado." });
    }

    return { status: "success", data: perfilAtualizado };
  } catch (error) {
    console.error("Erro ao atualizar perfil:", error);
    throw createError({ statusCode: 500, message: "Erro ao atualizar perfil." });
  }
});
