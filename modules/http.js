const http = require("http");

const port = 8080;

const server = http.createServer((req, res) => {
  if (req.url === "/home") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Hello, World!</h1>"); // Resposta simples para a rota raiz - tem que ser uma string
  }
  if (req.url === "/users") {
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
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users)); //transformando o objeto em JSON preparado para ser lido pelo navegador
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
