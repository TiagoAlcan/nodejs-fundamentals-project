const express = require("express");
const UserModel = require("../src/models/user.model"); // Importando o modelo UserModel

const app = express();
app.use(express.json()); // Necessário para que o Express entenda o corpo da requisição como JSON
const port = 8080;

app.get("/home", (req, res) => {
  res.contentType("application/html"); // Definindo o tipo de conteúdo como HTML (no Json a gente não define o tipo de conteúdo)
  res.status(200).send("<h1>Hello, World!<h1>"); // Resposta simples para a rota raiz - tem que ser uma string
});

app.get("/users", (req, res) => {
  const users = [
    {
      name: "John Doe",
      email: "johndoe@gmail.com",
    },
    {
      name: "Jane Doe",
      email: "janedoe@gmail.com",
    },
  ];
  res.status(200).json(users); // Enviando a resposta como JSON
  // Não é necessário definir o tipo de conteúdo, pois o Express já faz isso automaticamente
});

app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body); // Criando um novo usuário com os dados do corpo da requisição (é ima promise, por isso o await)
    res.status(201).json(user); // Enviando o usuário criado como resposta
  } catch (error) {
    res.status(500).send(error.message); // Enviando erro caso ocorra
  }
});

app.listen(port, () => {
  console.log(`Server running with Express at http://localhost:${port}/`);
});
