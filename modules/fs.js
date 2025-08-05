//manipular sistemas de arquivos e diretórios
const fs = require("fs");
const path = require("path");

//criar um diretório

fs.mkdir(path.join(__dirname, "test"), (error) => {
  if (error) {
    return console.error("Erro ao criar diretório:", error);
  }
  console.log("Diretório criado com sucesso!");
});
//criar um arquivo dentro do diretório criado
fs.writeFile(
  path.join(__dirname, "/test", "teste.txt"),
  "hello node!",
  (error) => {
    if (error) {
      return console.error("Erro ao criar arquivo:", error);
    }
    console.log("Arquivo criado com sucesso!");
    //adicionar conteúdo ao arquivo
    fs.appendFile(
      path.join(__dirname, "/test", "teste.txt"),
      "Hello World!",
      (error) => {
        if (error) {
          return console.error("Erro ao adicionar conteúdo ao arquivo:", error);
        }
        console.log("Conteúdo adicionado com sucesso!");
      }
    );
    //ler arquivo
    fs.readFile(
      path.join(__dirname, "/test", "teste.txt"),
      "utf-8",
      (error, data) => {
        if (error) {
          return console.error("Erro ao ler arquivo:", error);
        }
        console.log("Conteúdo do arquivo:", data);
      }
    );
  }
);
