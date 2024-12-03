import Perfil from "~/server/models/Perfil";
import formidable from "formidable";
import path from "path";

export default defineEventHandler(async (event) => {
  try {
    const form = formidable({
      uploadDir: path.join("public/uploads"),
      keepExtensions: true,
      maxFileSize: 10 * 1024 * 1024, // 10MB
    });

    const { fields, files } = await new Promise((resolve, reject) => {
      form.parse(event.node.req, (err, fields, files) => {
        if (err) reject(err);
        resolve({ fields, files });
      });
    });

    console.log("Campos recebidos (antes da conversão):", fields);
    console.log("Arquivos recebidos:", files);

    // Converte os campos para strings simples
    const nome = Array.isArray(fields.nome) ? fields.nome[0] : fields.nome;
    const dataAniversario = Array.isArray(fields.dataAniversario)
      ? fields.dataAniversario[0]
      : fields.dataAniversario;
    const localizacao = Array.isArray(fields.localizacao)
      ? fields.localizacao[0]
      : fields.localizacao;
    const bio = Array.isArray(fields.bio) ? fields.bio[0] : fields.bio;
    const url = Array.isArray(fields.url) ? fields.url[0] : fields.url;

    console.log("Campos convertidos:", { nome, dataAniversario, localizacao, bio, url });

    // Validação dos campos obrigatórios
    if (!nome || !dataAniversario || !localizacao || !bio || !files.foto) {
      throw createError({
        statusCode: 400,
        message: "Todos os campos obrigatórios devem ser preenchidos, incluindo a foto.",
      });
    }

    const foto = Array.isArray(files.foto) ? files.foto[0] : files.foto;

    if (!foto.filepath) {
      throw createError({
        statusCode: 400,
        message: "Erro ao processar o arquivo de imagem.",
      });
    }

    // Define o caminho da foto salva
    const fotoPath = `/uploads/${path.basename(foto.filepath)}`;

    // Cria o novo perfil
    const novoPerfil = new Perfil({
      nome,
      dataAniversario,
      localizacao,
      bio,
      url: url || null,
      foto: {
        name: foto.originalFilename,
        src: fotoPath,
      },
    });

    // Salva o perfil no banco de dados
    const perfilCriado = await novoPerfil.save();

    console.log("Perfil criado com sucesso:", perfilCriado);

    return { status: "success", data: perfilCriado };
  } catch (error) {
    console.error("Erro ao criar perfil:", error);
    throw createError({ statusCode: 500, message: "Erro ao criar perfil." });
  }
});
