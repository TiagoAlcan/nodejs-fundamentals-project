const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@nodejs.f8dioef.mongodb.net/?retryWrites=true&w=majority&appName=NodeJS`
    ); // Conectando ao MongoDB usando a URL de conexão com o usuário e senha do .env (variavel de ambiente)
    console.log("Conectado ao MongoDB!");
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error);
  }
};

module.exports = connectToDatabase;
