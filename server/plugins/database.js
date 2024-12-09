import mongoose from "mongoose";

export default defineNitroPlugin(() => {
  // Define a URI do MongoDB, com suporte a variáveis de ambiente e um fallback
  const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/Linksy";
  
  try {
    // Conecta ao banco de dados
    mongoose.connect(MONGO_URI, {});

    // Evento de conexão bem-sucedida
    mongoose.connection.on('connected', () => {
      console.log('Conexão com o MongoDB estabelecida com sucesso!');
    });

    // Evento de erro de conexão
    mongoose.connection.on('error', (err) => {
      console.error('Erro na conexão com o MongoDB:', err);
    });
  } catch (error) {
    console.error('Erro ao tentar conectar ao MongoDB:', error);
  }
});
