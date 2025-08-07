const express = require("express");
const UserModel = require("../src/models/user.model"); // Importando o modelo UserModel

const app = express();
app.use(express.json()); // Necessário para que o Express entenda o corpo da requisição como JSON
const port = 8080;

app.get("/home", (req, res) => {
  res.contentType("application/html"); // Definindo o tipo de conteúdo como HTML (no Json a gente não define o tipo de conteúdo)
  res.status(200).send("<h1>Hello, World!<h1>"); // Resposta simples para a rota raiz - tem que ser uma string
});

app.get("/users", async (req, res) => {
  try {
    const user = await UserModel.find({}); // Buscando todos os usuários no banco de dados

    res.status(200).json(user); // Enviando os usuários encontrados como resposta
  } catch (error) {
    res.status(500).send(error.message); // Enviando erro caso ocorra (é uma string, por isso o .send)
  }
});

app.get("/users/:id", async (req, res) => {
  // Rota para buscar um usuário específico pelo ID (:id é um parâmetro de rota do express)
  try {
    const id = req.params.id; // Obtendo o ID do usuário a partir dos parâmetros da rota
    const user = await UserModel.findById(id); // Buscando o usuário pelo ID
    res.status(200).json(user); // Enviando o usuário encontrado como resposta
  } catch (error) {
    res.status(500).send(error.message); // Enviando erro caso ocorra
  }
});

app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body); // Criando um novo usuário com os dados do corpo da requisição (é ima promise, por isso o await)
    res.status(201).json(user); // Enviando o usuário criado como resposta
  } catch (error) {
    res.status(500).send(error.message); // Enviando erro caso ocorra
  }
});

app.patch("users/:id", async (req, res) => {
  try {
    const id = req.params.id; // Obtendo o ID do usuário a partir dos parâmetros da rota
    const user = await UserModel.findByIDAndUpdate(id, req.body, { new: true }); // Atualizando o usuário com os dados do corpo da requisição (req.body é uma promise, por isso o await e o new: true retorna o usuário atualizado)
    res.status(200).json(user); // Enviando o usuário atualizado como resposta
  } catch (error) {
    res.status(500).send(error.message); // Enviando erro caso ocorra
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id; // Obtendo o ID do usuário a partir dos parâmetros da rota
    const user = await UserModel.findByIdAndDelete(id); // Deletando o usuário pelo ID
    res.status(200).json(user); // Enviando o usuário deletado como resposta
  } catch (error) {
    res.status(500).send(error.message); // Enviando erro caso ocorra
  }
});

app.listen(port, () => {
  console.log(`Server running with Express at http://localhost:${port}/`);
});
