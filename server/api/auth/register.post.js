import bcrypt from 'bcryptjs';
import User from "~/server/models/User";
import formidable from "formidable";
import path from "path";

export default defineEventHandler(async (event) => {
    try {
        // Configura o formidable
        const form = formidable({
            uploadDir: path.join("public/uploads"),
            keepExtensions: true,
            maxFileSize: 10 * 1024 * 1024, // 10MB
        });

        // Parseia os dados e arquivos recebidos
        const { fields, files } = await new Promise((resolve, reject) => {
            form.parse(event.node.req, (err, fields, files) => {
                if (err) reject(err);
                resolve({ fields, files });
            });
        });

        console.log("Campos recebidos:", fields);
        console.log("Arquivos recebidos:", files);

        // Extrai e converte os campos
        const nome = fields.nome?.[0];
        const dataAniversario = fields.dataAniversario?.[0];
        const email = fields.email?.[0];
        const senha = fields.senha?.[0];
        const confirma_senha = fields.confirma_senha?.[0];
        const localizacao = fields.localizacao?.[0];
        const bio = fields.bio?.[0];
        const escolha = fields.escolha?.[0];

        // Validação dos campos obrigatórios
        if (!nome || !dataAniversario || !email || !senha || !confirma_senha || !localizacao || !bio || !files.foto) {
            throw createError({
                statusCode: 400,
                message: "Todos os campos obrigatórios devem ser preenchidos, incluindo a foto.",
            });
        }

        // Verifica se as senhas coincidem
        if (senha !== confirma_senha) {
            throw createError({
                statusCode: 406,
                message: "As senhas não coincidem",
            });
        }

        // Verifica se o usuário já existe
        const userExists = await User.findOne({ email });
        if (userExists) {
            throw createError({
                statusCode: 400,
                message: "Usuário já existe",
            });
        }

        // Criptografa a senha
        const hashedPassword = await bcrypt.hash(senha, 10);

        // Trata o arquivo da foto
        const foto = files.foto?.[0];
        const fotoPath = `/uploads/${path.basename(foto.filepath)}`;

        // Cria o novo usuário
        const newUser = new User({
            nome,
            dataAniversario,
            email,
            senha: hashedPassword,
            localizacao,
            bio,
            foto: {
                name: foto.originalFilename,
                src: fotoPath,
            },
            escolha,
        });

        // Salva o usuário no banco de dados
        const createdUser = await newUser.save();

        console.log("Usuário criado com sucesso:", createdUser);
        return {
            success: true,
            user: createdUser.toObject(),
        };
    } catch (error) {
        console.error("Erro ao cadastrar usuário:", error);
        throw createError({ statusCode: 500, message: "Erro ao cadastrar usuário." });
    }
});
